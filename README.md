# 🎓 SemScore - KTU SGPA & CGPA Calculator

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-Markup-orange?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-Dynamic_Functionality-yellow?style=for-the-badge&logo=javascript)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

### A Modern KTU SGPA & CGPA Calculator Built Using HTML, CSS and JavaScript

</div>

---

# 📖 Overview

**SemScore** is a lightweight and user-friendly web application designed to calculate **KTU Semester Grade Point Average (SGPA)** and **Cumulative Grade Point Average (CGPA)** accurately.

Users can enter subject details, credits, and grades for each semester, calculate SGPA instantly, save semester records, and compute the overall CGPA based on earned credits.

The application is built entirely using **HTML, CSS, and JavaScript** without requiring any backend or database.

---

# ✨ Key Features

### 📚 Dynamic Subject Entry

Add any number of subjects dynamically.

### 🎯 Accurate SGPA Calculation

Calculates SGPA based on:

- Subject Credits
- KTU Grade Points

### 💾 Semester Saving

Save individual semester results for future CGPA calculation.

### 📊 Credit-Based CGPA

Computes CGPA using weighted credit averages across all saved semesters.

### 🧾 Semester History

Displays all saved semesters along with their calculated SGPA.

### 🔄 Reset Functionality

Reset the calculator to start a fresh calculation.

### 📱 Responsive Interface

Optimized for:

- Desktop
- Tablet
- Mobile Devices

### ⚡ Fast Performance

Runs completely in the browser without internet connectivity.

---

# 🏗️ System Architecture

```text
index.html
      |
      ↓
User Interface
      |
      ↓
JavaScript Logic
      |
      ├── Add Subject
      ├── Calculate SGPA
      ├── Save Semester
      ├── Calculate CGPA
      └── Reset Calculator
```

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Website Structure |
| CSS3 | Styling & Responsive Design |
| JavaScript | Calculator Logic |
| DOM Manipulation | Dynamic User Interface |

---

# 📂 Project Structure

```text
SemScore/
│
├── index.html
├── style.css
├── calculate.js
├── README.md
│
├── assets/
│   ├── logo.png
│   ├── icons/
│   └── images/
│
└── screenshots/
```

---

# 🎯 KTU Grade Point Mapping

| Grade | Grade Point |
|--------|------------:|
| S | 10.0 |
| A+ | 9.0 |
| A | 8.5 |
| B+ | 8.0 |
| B | 7.0 |
| C | 6.0 |
| P | 5.5 |
| F | 0 |
| FE | 0 |
| Ab | 0 |

---

# 🧮 Features in Detail

## ➕ Add Subjects

- Add unlimited subjects
- Enter subject name
- Enter credits
- Select grade

---

## 📊 Calculate SGPA

The application automatically calculates:

- Total Credits
- Total Grade Points
- Semester GPA

using the KTU grading system.

---

## 💾 Save Semester

Users can save:

- Semester Name
- SGPA
- Total Credits

Duplicate semester entries are prevented.

---

## 🎓 Calculate CGPA

CGPA is calculated using the weighted average formula:

```text
CGPA =
Σ(SGPA × Credits)
──────────────────
 Total Credits
```

---

## 🗂 Semester List

Displays all saved semesters such as:

```text
S1 : SGPA 8.75
S2 : SGPA 8.94
S3 : SGPA 9.12
```

---

# ⚙️ Installation & Setup

## Step 1 : Clone Repository

```bash
git clone https://github.com/your-username/SemScore.git
```

Move into the project folder:

```bash
cd SemScore
```

---

## Step 2 : Open Project

Open the folder using any editor such as:

- Visual Studio Code
- VSCodium
- IntelliJ IDEA
- Sublime Text

---

## Step 3 : Run Application

Open

```text
index.html
```

inside your preferred browser.

No installation or server is required.

---

# 🚀 Application Workflow

## User Flow

1. Open SemScore.
2. Enter subject details.
3. Add credits.
4. Select grades.
5. Calculate SGPA.
6. Save semester.
7. Repeat for additional semesters.
8. Calculate overall CGPA.

---

# 🧪 Testing

| Test Case | Expected Result |
|------------|----------------|
| Open Website | Loads Successfully |
| Add Subject | New Subject Row Added |
| Enter Credits | Accepts Valid Input |
| Select Grade | Grade Selected Successfully |
| Calculate SGPA | Correct SGPA Displayed |
| Save Semester | Semester Saved Successfully |
| Duplicate Semester | Warning Message Displayed |
| Calculate CGPA | Correct CGPA Displayed |
| Reset | Calculator Cleared |

---

# 🌟 Future Enhancements

- [ ] Percentage Calculator
- [ ] Grade Prediction
- [ ] PDF Report Export
- [ ] Semester Editing
- [ ] Delete Saved Semester
- [ ] Local Storage Support
- [ ] Dark Mode
- [ ] GPA Trend Graph
- [ ] Printable Report
- [ ] KTU Scheme Selection

---

# 🤝 Contribution

Contributions are welcome.

### Steps

1. Fork the repository.

2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Added new feature"
```

4. Push the branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

# 💡 Advantages

- Clean User Interface
- Lightweight
- Beginner Friendly
- Instant Calculations
- Responsive Design
- Credit-Based Accuracy
- No Login Required
- Works Offline

---

# 👨‍💻 Author

**Ajith P A**

---

# 📄 License

This project is developed for educational and learning purposes.

---

<div align="center">

## ⭐ If you found this project useful, consider giving it a star!

# 🎓 SemScore

### **Calculate • Save • Track • Achieve**

Made with ❤️ using HTML, CSS & JavaScript

</div>
