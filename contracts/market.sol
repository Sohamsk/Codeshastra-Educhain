// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CourseMarket {
    struct User {
        string name;
        uint256[] enrolled_courses;
        uint256[] created_courses;
    }

    mapping(address => User) usersInfo;

    struct Course {
        uint256 id;
        address payable teacher;
        uint256 price;
        uint256 enrolledStudents;
        uint256 payableStudents;
        string details;
    }
    mapping(uint256 => mapping(address => bool)) studentsEnrolled;
    mapping(uint256 => Course) public courses;

    event CoursePurchased(uint256 courseId, address student);

    function createUser(string memory _name) public {
        require(bytes(usersInfo[msg.sender].name).length == 0, "User already exists");
        usersInfo[msg.sender].name = _name;
    }

    function addCourse(uint256 _courseId, uint256 _price, string memory _details) public {
        require(courses[_courseId].id == 0, "Course ID already exists");
        courses[_courseId] = Course({
            id: _courseId,
            teacher: payable(msg.sender),
            price: _price,
            enrolledStudents: 0,
            payableStudents: 0,
            details: _details
        });
    }

    function buyCourse(uint256 _courseId) public payable {
        Course storage course = courses[_courseId];
        require(course.id != 0, "Course does not exist");
        require(msg.value >= course.price, "Insufficient payment sent");
        require(studentsEnrolled[_courseId][msg.sender] == false, "Student already enrolled");

        course.enrolledStudents++;
        studentsEnrolled[_courseId][msg.sender] = true;

        emit CoursePurchased(_courseId, msg.sender);
    }

    function withdrawFunds(uint256 _courseId) public {
        Course storage course = courses[_courseId];
        require(course.id != 0, "Course does not exist");
        require(msg.sender == course.teacher, "Only teacher can withdraw");
        require(course.enrolledStudents >= 10, "Minimum enrollment not reached");

        course.teacher.transfer(course.price * course.enrolledStudents * 9 / 10);
    }

    function viewCourse(uint256 _courseId) public view returns(Course memory) {
        return courses[_courseId];
    }
    function viewEnrolled(uint256 _courseId) public view returns(bool) {
        return studentsEnrolled[_courseId][msg.sender];
    }
    function getUser(address _user) public view returns(User memory) {
        return usersInfo[_user];
    }
}

