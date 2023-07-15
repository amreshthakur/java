function generateHTML() {
  const container = document.createElement('div');
  container.innerHTML = `
    <style>
      .btn {
        background-color: rgb(5, 255, 5);
        border: none;
        color: rgb(7, 7, 7);
        padding: 12px 30px;
        cursor: pointer;
        font-size: 20px;
      }

      /* Darker background on mouse-over */
      .btn:hover {
        background-color: rgb(255, 255, 17);
      }

      .button-container0 {
        display: flex;
        justify-content: space-between;
      }

      .back-button2,
      .forward-button1 {
        display: inline-block;
        width: 150px;
        height: 40px;
        background-color: #34f609;
        color: #000000;
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        text-decoration: none;
        font-weight: bold;
      }

      .back-button2:hover,
      .forward-button1:hover {
        background-color: #999;
      }
    </style>

    <div>
      <div class="button-container0">
        <a href="/" class="back-button2">Back Button</a>
        <a href="/p/bsc-csit-first-semester.html" class="forward-button1">Next button</a>
      </div>
      <div>
        <h3>Csit Whole Semester </h3>
      </div>

      <a href="/p/bsc-csit-first-semester.html" rel="nofollow">
        <button class="btn" style="width: 100%;">
          <i class="fa fa-download"></i> B.Sc Csit First Semester 👈👈Click
        </button>
      </a>
      <p>Share This with friends</p>
      <a href="/p/bsc-csit-second-semester.html" rel="nofollow">
        <button class="btn" style="width: 100%;">
          <i class="fa fa-download"></i> B.Sc Csit Second Semester 👈👈Click
        </button>
      </a>
      <p>Share This with friends</p>
      <a href="/p/bsc-csit-third-semester.html" rel="nofollow">
        <button class="btn" style="width: 100%;">
          <i class="fa fa-download"></i>B.Sc csit Third Semester👈👈Click
        </button>
      </a>
      <p>Share This with friends</p>
      <a href="/p/bsc-csit-fourth-semester.html" rel="nofollow">
        <button class="btn" style="width: 100%;">
          <i class="fa fa-download"></i> B.Sc Csit Fourth Semester 👈👈Click
        </button>
      </a>
      <p>Share This with friends</p>
      <a href="/p/bsc-csit-fifth-semester.html" rel="nofollow">
        <button class="btn" style="width: 100%;">
          <i class="fa fa-download"></i> B.Sc Csit Fifth Semester 👈👈Click
        </button>
      </a>
      <p>Share This with friends</p>
      <a href="/p/bsc-csit-sixth-semester.html" rel="nofollow">
        <button class="btn" style="width: 100%;">
          <i class="fa fa-download"></i> B.Sc Csit Sixth Semester 👈👈Click
        </button>
      </a>
      <p>Share This with friends</p>
      <a href="/p/bsc-csit-seven-semester.html" rel="nofollow">
        <button class="btn" style="width: 100%;">
          <i class="fa fa-download"></i>B.Sc Csit Seventh Semester 👈👈Click
        </button>
      </a>
      <p>Share This with friends</p>
      <a href="/p/bsc-csit-eight-semester.html" rel="nofollow">
        <button class="btn" style="width: 100%;">
          <i class="fa fa-download"></i>B.Sc Csit Eighth Semester 👈👈Click
        </button>
      </a>
      <p>Share This with friends</p>
    </div>
    <div class="button-container0">
      <a href="/" class="back-button2">Back Button</a>
      <a href="/p/bsc-csit-first-semester.html" class="forward-button1">Next button</a>
    </div>
  `;

  document.body.appendChild(container);
}

generateHTML();
