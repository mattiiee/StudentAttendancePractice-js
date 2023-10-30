const students = [
    {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: 'Mason',
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: 'Isabella',
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: 'Liam',
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: 'Olivia',
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
  ]

  function getAttendanceRate(student) {
    const attend = student.attendance.filter((atd) => atd === true)
    return (attend.length/student.attendance.length)*100
  }

  function getAvgScore(student) {
    const sumScore = student.testScores.reduce((sum, currentScore) => sum + currentScore, 0)
    const avgScore = sumScore/student.testScores.length
    return avgScore
  }

  function underPerformStudents(students) {
    const attend = students.filter((student) => getAttendanceRate(student) < 80 && getAvgScore(student) < 70)
    .map((underPerformStudents) => {
        return {
            name: underPerformStudents.name,
            attendanceRate: getAttendanceRate(underPerformStudents),
            avg: getAvgScore(underPerformStudents)
        }
    })
    return attend
  }

  console.log(getAttendanceRate(students[0]))
  console.log(getAvgScore(students[0]));
  console.log(underPerformStudents(students));