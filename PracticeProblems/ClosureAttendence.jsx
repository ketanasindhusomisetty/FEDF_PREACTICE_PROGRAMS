function attendanceTracker() {
    let present = 0;
    let absent = 0;

    return {
        markAttendance: function(status) {
            if (status === 1)
                present++;
            else
                absent++;
        },

        displayReport: function() {
            console.log("Present:", present);
            console.log("Absent:", absent);
        }
    };
}

const attendance = attendanceTracker();

attendance.markAttendance(1);
attendance.markAttendance(0);
attendance.markAttendance(1);
attendance.markAttendance(1);

attendance.displayReport();