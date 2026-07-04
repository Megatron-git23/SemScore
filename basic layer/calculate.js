const grades={
    "S":10,
    "A+":9,
    "A":8.5,
    "B+":8,
    "B":7,
    "C":6,
    "P":5.5,
    "F":0,
    "FE":0,
    "Ab":0
};
const tablebody=document.getElementById("tbody");
const sgpavalue=document.getElementById("sg");
const cgpavalue=document.getElementById("cg");
const semlist=document.getElementById("semlist");
const semselect=document.getElementById("sem");

let savedsemestersbe =[];

document.getElementById("add-subject").addEventListener("click",add_subject);

function add_subject(){
    const data=document.createElement("tr");
    data.innerHTML=`<td><input type="text" id="subject"placeholder="Enter Subject Name"></td><td><input type="number" id="credit"placeholder="Enter the Credit" min="0"max="6"></td><td><select name="Grade" id="grade" required><option disabled selected hidden>Grade</option><option >S</option><option >A+</option><option >A</option><option >B+</option><option >B</option><option >C</option><option >P</option><option >F</option><option >FE</option><option >Ab</option></select></td>`;
    tablebody.appendChild(data);
}
function calsgpa(){
    let allcredits=0;
    let totalpoints=0;
    const rows=tablebody.querySelectorAll("tr");
    rows.forEach(data=>{
        const inp=data.querySelectorAll("input");
        const grade=data.querySelector("select").value;
        const subject=inp[0].value.trim();
        const credit=parseFloat(inp[1].value);

    if(subject===""||isNaN(credit))
            return;
        allcredits+=credit;
        totalpoints+=credit*grades[grade];


    });
    if(allcredits===0){
        alert("Enter valid subject details.");
        return null;
    }
    return{
        sgpa : totalpoints/allcredits,
        credits: allcredits
    };
}
document.getElementById("sgpa").addEventListener("click",()=>{
    const result=calsgpa();
    if(result)
          sgpavalue.innerHTML="SGPA :"+result.sgpa.toFixed(2);
});


document.getElementById("save-semester").addEventListener("click",()=>{
    const result=calsgpa();
    if(result==null)
        return;
    const semester=semselect.value;
    const existingsem=savedsemestersbe.find(s=>s.semester===semester);
    if(existingsem){
        alert("Semester already saved.");
        return;
    }
    savedsemestersbe.push({
        semester:semester,
        sgpa:result.sgpa,
        credits:result.credits
    });
    updatesemesterlist();
    alert("Semester saved");
});
function updatesemesterlist(){
    semlist.innerHTML="";
    savedsemestersbe.forEach(s=>{
        const li=document.createElement("li");
        li.textContent=`${s.semester}:SGPA ${s.sgpa.toFixed(2)}`;
        semlist.appendChild(li);
    });
}

document.getElementById("cgpa").addEventListener("click",()=>{
    if(savedsemestersbe.length===0){
        alert("Need to save semester first lil broooo");
        return;

    }
    let totalcredits=0;
    let average=0;
    savedsemestersbe.forEach(s=>{
        totalcredits+=s.credits;
        average+=s.sgpa*s.credits;
    });
    const cgpa=average/totalcredits;
    cgpavalue.innerHTML="CGPA:"+cgpa.toFixed(2);

});

document.getElementById("reset").addEventListener("click",()=>{
    tablebody.innerHTML="";
    add_subject();
    savedsemestersbe=[];
    semlist.innerHTML="";
    sgpavalue.innerHTML="SGPA RESULT:0.00%";
    cgpavalue.innerHTML="CGPA RESULT:0.00%";
});