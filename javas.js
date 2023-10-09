const facultySelect = document.getElementById("facultySelect");
const profileContainer = document.getElementById("profileContainer");

const facultyData = {
  1: {
    name: "Dr.Abhik Mukherjee",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5dd78d8188470abhikPhoto.jpg",
    email: "abhik.mukherjee@example.com",
    qualification: "Ph.D. Computer Science Department, BESU Shibpur in 2003",
    subjects: "Estimation Theory, Information Systems",
    researchAreas: "Meteorology, Navigation, Systems Biology, Social Media Analysis, Energy Systems",
    Reference_website: "https://www.iiests.ac.in/IIEST/Faculty/cs-abhik",
  },
  2: {
    name: "Dr.Apurba Sarkar",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5dd3dca7421c2apurba.jpg",
    email: "apurba.sarkar@example.com",
    qualification: "Ph.D. (Computer Science and Engineering), IIT Kanpur, 2016",
    subjects: "Digital Geometry, Combinatorial Geometry",
    researchAreas: "Text Summarization, Image Processing, Graph Compression",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-apurba",
  },
  3: {
    name: "Mr.Ashish Layek",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/ashishlayek_cst.jpg",
    email: "ashish.layek@example.com",
    qualification: "M.E. in Computer Science and Technology, Bengal Engineering College (DU), 2001",
    subjects: "Wireless Telecommunication, Pattern Recognition",
    researchAreas: "Wireless Networks, Mobile Computing, Computer Vision",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-ashish",
  },
  4: {
    name: "Dr.Asit Kumar Das",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/photo.png",
    email: "asit.das@example.com",
    qualification: "Ph.D.(Engineering) from Department of Computer Science and Technology, Bengal Engineering and Science University , 2011",
    subjects: "Machine Learning, Big Data Analytics, Data Mining",
    researchAreas: "Pattern Recognition, Soft Computing, Natural Language Processing, Social Networks, Bioinformatics, Medical Image Analysis, Text, Audio and Video data Analysis",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-akdas",
  },
  5: {
    name: "Dr.Biplab Sikdar",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/cst_bksikdar.jpg",
    email: "biplab.sikdar@example.com",
    qualification: "PhD from Bengal Engineering and Science University, Shibpur, in 2003.",
    subjects: "Cellular Automata, Computer Architecture",
    researchAreas: "Computer Architecture",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-biplab",
  },
  6: {
    name: "Dr.Jaya Sil",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5de528372c999photo-js.jpeg",
    email: "jaya.sil@example.com",
    qualification: "Ph.D.(Computer Sc.) - Specialization in Artificial Intelligence and Soft Computing - In 1996.",
    subjects: "Image Processing and Computer Vision, Machine Learning, Bio-Informatics",
    researchAreas: "Image Processing and Computer Vision, Machine Learning, Bio-Informatics",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-js",
  },
  7: {
    name: "Dr.Malay Kule",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5f69014e1b6ecMalay.jpg",
    email: "malay.kule@example.com",
    qualification: " Ph. D., Engineering, Indian Institute of Engineering Science and Technology, Shibpur",
    subjects: "Defect Tolerance of Nanoscale Crossbar Circuits, Cryptology, Hardware Security, Securing Social Network",
    researchAreas: "Defect Tolerance of Nanoscale Crossbar Circuits, Cryptology, Hardware Security, Securing Social Network",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-malay",
  },
  8: {
    name: "Mr.Manas Hira",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/cst_mhira.jpg",
    email: "manas.hira@example.com",
    qualification: "M.Tech. (CSE Department, IIT Kharagpur) in the year 1991 ",
    subjects: "Circuit Verification using Temporal Logic",
    researchAreas: "Circuit Verification using Temporal Logic",
    Reference_website: "https://www.iiests.ac.in/IIEST/Faculty/cs-manas",
  },
  9: {
    name: "Dr.Nirnay Ghosh",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5f9a84d7abd0433584458_1755658291192872_6819064364054609920_n.jpg",
    email: "nirnay.ghosh@example.com",
    qualification: "Doctor of Philosophy (PhD), IIT Kharagpur, 2016",
    subjects: "Cloud Computing, Network Security",
    researchAreas: "Cloud Computing, Network Security",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-nirnay",
  },
  10: {
    name: "Dr.Samit Biswas",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/samit.jpg",
    email: "samit.biswas@example.com",
    qualification: "Ph.D. in Computer Science",
    subjects: "Machine Learning, Digital Image Processing and Analysis, Document Image Analysis, Computer Vision, Machine-based Translation, Social Network Analysis, Natural Language Processing, Data Mining and Pattern Recognition",
    researchAreas: "Machine Learning, Digital Image Processing and Analysis, Document Image Analysis, Computer Vision, Machine-based Translation, Social Network Analysis, Natural Language Processing, Data Mining and Pattern Recognition",
    researchAreas: "Cloud Computing, Network Security",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-samit",
  },
  11: {
    name: "Dr.Sekhar Mandal",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/sekhar__cst.jpg",
    email: "sekhar.mandal@example.com",
    qualification: " Ph.D. in the year 2007 from the Department of Computer Science and Technology, Bengal Engineering and Science University, Shibpur.",
    subjects: "Image Processing and Pattern Recognition",
    researchAreas: "Image Processing and Pattern Recognition",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-sekhar",
  },
  12: {
    name: "Dr.Sipra Das Bit",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5e5501ff1f488IMG-20191227-WA0005.jpg",
    email: "sipra.das.bit@example.com",
    qualification: "Ph.D(Engg) from Dept. of Computer Sc. & Engg.from Jadavpur University, Kolkata, 1997",
    subjects: "Internet of Things (IoT), Mobile Computing, Wireless Sensor Network, Delay Tolerant Network",
    researchAreas: "Internet of Things (IoT), Mobile Computing, Wireless Sensor Network, Delay Tolerant Network",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-sb",
  },
  13: {
    name: "Dr.Somnath Pal",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5dcce6dc80be4Somnath_pal.jpg",
    email: "somnath.pal@example.com",
    qualification: "Ph. D. from Department of Computer Science and Technology, IIEST, Shibpur.",
    subjects: "Artificial Intelligence, Logic and Reasoning, Machine Learning and Data Mining, Genetic and Nature-Inspired Algorithms",
    researchAreas: "Artificial Intelligence, Logic and Reasoning, Machine Learning, Data Mining, Genetic and Nature-Inspired Algorithms",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-sp",
  },
  14: {
    name: "Dr.Surajeet Ghosh",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/sjg.png",
    email: "surajeet.ghosh@example.com",
    qualification: "Ph.D. (Engineering), Jadavpur University, Kolkata, India",
    subjects: "Hardware Accelerators for Machine Learning Applications, Machine Learning for Embedded Systems, Neuromorphic Computing, Custom Computing, Computational Architecture for Next Generation Sequencing, FPGA Based Embedded Systems Design, Machine Learning Based Optimization in IoT Protocol, IPv6 Routing Protocol for Low-Power and Lossy Networks (RPL), Hardware Architecture for Network Routing Schemes, Routing Protocol for IoT Networks",
    researchAreas: "Hardware Accelerators for Machine Learning Applications, Machine Learning for Embedded Systems, Neuromorphic Computing, Custom Computing, Computational Architecture for Next Generation Sequencing, FPGA Based Embedded Systems Design, Machine Learning Based Optimization in IoT Protocol, IPv6 Routing Protocol for Low-Power and Lossy Networks (RPL), Hardware Architecture for Network Routing Schemes, Routing Protocol for IoT Networks",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-surajeet",
  },
  15: {
    name: "Dr.Sulata Mitra",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/61234ce4eaa33IMG_20210823_125033.jpg",
    email: "sulata.mitra@example.com",
    qualification: "Ph.D.",
    subjects: "Ad-hoc network, Multihomed mobile network, Mobile computing",
    researchAreas: "Ad-hoc network, Multihomed mobile network, Mobile computing",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-sulata",
  },
  16: {
    name: "Dr.Susanta Chakraborty",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/skc_CSt.jpg",
    email: "susanta.chakraborty@example.com",
    qualification: "Ph.D(Tech) in Computer Science from  University of Calcutta, work done at Advanced Computing  Unit, Indian Statistical Institute, ",
    subjects: "Social Network analysis, Machine learning, AI, Big Data analysis, Test-pattern generation, Video image processing, Quantum Computing",
    researchAreas: "Social Network analysis, Machine learning, AI, Big Data analysis, Test-pattern generation, Video image processing, Quantum Computing",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-sc",
  },
  17: {
    name: "Dr.Tamal Pal",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5dca99372efa6tamal_pal.jpg",
    email: "tamal.pal@example.com",
    qualification: "Ph.D (Engineering), Computer Science and Technology, IIEST",
    subjects: "Multimedia (Image, Video etc.) processing and communication, Wireless Network (Wireless sensor network, Delay tolerant network, Vehicular Adhoc network etc.), Multimedia security, Machine Learning, Games programming",
    researchAreas: "Multimedia (Image, Video etc.) processing and communication, Wireless Network (Wireless sensor network, Delay tolerant network, Vehicular Adhoc network etc.), Multimedia security, Machine Learning, Games programming",
    Reference_website:"https://www.iiests.ac.in/IIEST/Faculty/cs-tamal",
  },
};

facultySelect.addEventListener("change", () => {
  const selectedFacultyId = facultySelect.value;
  const selectedFaculty = facultyData[selectedFacultyId];

  if (selectedFaculty) {
    const profileHTML = `
      <h2>${selectedFaculty.name} </h2>
      <img src="${selectedFaculty.photoUrl}" alt="${selectedFaculty.name}" class="profile-image">
      <p><strong>Email:</strong> ${selectedFaculty.email}</p>
      <p><strong>Highest Qualification:</strong> ${selectedFaculty.qualification}</p>
      <p><strong>Subjects:</strong> ${selectedFaculty.subjects}</p>
      <p><strong>Research Areas:</strong> ${selectedFaculty.researchAreas}</p>
      <p><strong>Reference_website:</strong> ${selectedFaculty.Reference_website}</p>
    `;

    profileContainer.innerHTML = profileHTML;
    profileContainer.style.display = "block";
  } else {
    profileContainer.style.display = "none";
  }
});
