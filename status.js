const Student = "";
const grade = "";

const studentArray = [
  {
    studentInfo: {
      Name: "Marlon Gacrama",
      Grade: 1.0,
    },
  },
  {
    studentInfo: {
      Name: "Irene Gonzaga",
      Grade: 1.0,
    },
  },
];

//PUSH
const addingStudent = (newStudent) => {
  console.log(`push method`);
  const nStudent = studentArray.push({
    studentInfo: {
      Name: "Freya Gonzaga",
      Grade: 1.0,
    },
  });
  console.log(studentArray);
};

//POP
const removeStudent = (byeStudent) => {
  console.log(`pop method`);
  const deleteStudent = studentArray.pop();
  console.log(studentArray);
};

//SHIFT
const shifter = (bogo) => {
  console.log(`shift method`);
  const bogoa = studentArray.shift(bogo);
  console.log(studentArray);
};

//UNSHIFT
const unshifter = () => {
  console.log(`unshift method`);
  const bogoa = studentArray.unshift(
    {
      studentInfo: { Name: "asd Gonzaga", Grade: 1 },
    },
    {
      studentInfo: { Name: "ddddd Gonzaga", Grade: 1 },
    }
  );
  console.log(studentArray);
};

addingStudent();
removeStudent();
shifter();
unshifter();
