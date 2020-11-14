let studentsArray1 =
[
    {id: 1, name: 'zura', gpa: 4},
    {id: 2, name: 'stalin', gpa: 3.5},
    {id: 3, name: 'beria', gpa: 2},
    {id: 4, name: 'unnamed', gpa: 1}
];
let studentsArray2 =
[
    {id: 1, name: 'mari', gpa: 4},
    {id: 2, name: 'ettilda', gpa: 2.5},
    {id: 3, name: 'natia', gpa: 2.5},
    {id: 4, name: 'zara', gpa: 3},
    {id: 5, name: 'ani', gpa: 1}
];

function getTopStudents(studentsArray1, studentsArray2)
{
    let allStudents = studentsArray1.concat(studentsArray2);
    allStudents.sort((a, b) => a.gpa - b.gpa);

    let result = [];


    for (let i=allStudents.length-5; i<allStudents.length; i++)
    {
        result.push(allStudents[i]);
    }

    let lastStudentIndex = allStudents.length - 5;

    for (let i=lastStudentIndex-1; allStudents[i].gpa == allStudents[lastStudentIndex].gpa; i--)
    {
        result.push(allStudents[i]);
    }


    result.sort((a, b) => a.gpa - b.gpa);

    return result;
}

let answer = getTopStudents(studentsArray1, studentsArray2);
alert (answer.map(c => c.name));

