const Notice = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="bg-green-500 text-white mb-10 text-3xl p-4 rounded-md">
        Notice Board
      </h1>
      <ul
        className="bg-slate-50 text-2xl rounded-md p-2"
        style={{ height: "300px", width: "70%", overflowY: "scroll" }}
      >
        <li>
          1.Join us for "Workshops and Seminars" to acquire practical skills and
          knowledge in various subjects.
        </li>
        <br />
        <li>
          2. Explore flexible "Online Courses" to enhance your skills at your own
          pace.
        </li>
        <br />
        <li>
          3. Discover job opportunities at our "Career Fairs" - Free admission for
          all!
        </li>
        <br />
        <li>
          4. Join the "Artist Skills Swap" community to exchange creative expertise
          with fellow artists.
        </li>
        <br />
        <li>
          5. Visit "Creative Kids Corner" - a space for underprivileged children to
          learn and grow creatively, all for free.
        </li>
        <br />
        <li>
          6. Advance your IT skills at the "IT Learning and Training Center" with
          specialized courses.
        </li>
        <br />
        <li>
          7. Participate in interactive "Workshops and Seminars" led by experts in
          diverse fields.
        </li>
        <br />
        <li>
          8. Enrich your artistic journey by sharing skills at "Artist Skills Swap"
          - participation is free!
        </li>
        <br />
        <li>
          9. Access a wide range of "Online Courses" covering various topics -
          prices vary to suit your budget.
        </li>
        <br />
        <li>
          10. Join us for "Career Fairs" to network with employers and explore
          potential career paths.
        </li>
      </ul>
    </div>
  );
};

export default Notice;
