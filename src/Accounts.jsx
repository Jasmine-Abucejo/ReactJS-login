function Accounts() {
  return (
    <div>
      <h1>Student Accounts</h1>
      <div>
        <table
          style={{
            border: "solid black",
            borderCollapse: "collapse",
            width: "60vw",
          }}
        >
          <thead style={{ background: "teal" }}>
            <tr>
              <th>Name</th>

              <th>Year Level</th>
              <th>Course</th>

              <th>Email</th>

              <th>Phone</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
export default Accounts;
