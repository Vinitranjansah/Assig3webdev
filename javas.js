const facultySelect = document.getElementById("facultySelect");
const profileContainer = document.getElementById("profileContainer");

const facultyData = {
  1: {
    name: "Abhik Mukherjee",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5dd78d8188470abhikPhoto.jpg",
    email: "abhik.mukherjee@example.com",
    qualification: "Ph.D. in Computer Science",
    subjects: "Estimation Theory, Information Systems",
    researchAreas: "Meteorology, Navigation, Systems Biology, Social Media Analysis, Energy Systems",
  },
  2: {
    name: "Apurba Sarkar",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5dd3dca7421c2apurba.jpg",
    email: "apurba.sarkar@example.com",
    qualification: "Ph.D. in Computer Science",
    subjects: "Digital Geometry, Combinatorial Geometry",
    researchAreas: "Text Summarization, Image Processing, Graph Compression",
  },
  3: {
    name: "Ashish Layek",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/ashishlayek_cst.jpg",
    email: "ashish.layek@example.com",
    qualification: "M.E. in Computer Science and Technology",
    subjects: "Wireless Telecommunication, Pattern Recognition",
    researchAreas: "Wireless Networks, Mobile Computing, Computer Vision",
  },
  4: {
    name: "Asit Kumar Das",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/photo.png",
    email: "asit.das@example.com",
    qualification: "Ph.D. in Engineering",
    subjects: "Machine Learning, Big Data Analytics, Data Mining",
    researchAreas: "Pattern Recognition, Soft Computing, Natural Language Processing, Social Networks, Bioinformatics, Medical Image Analysis, Text, Audio and Video data Analysis",
  },
  5: {
    name: "Biplab Sikdar",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/cst_bksikdar.jpg",
    email: "biplab.sikdar@example.com",
    qualification: "Ph.D. in Computer Science",
    subjects: "Cellular Automata, Computer Architecture",
    researchAreas: "Computer Architecture",
  },
  6: {
    name: "Jaya Sil",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5de528372c999photo-js.jpeg",
    email: "jaya.sil@example.com",
    qualification: "Ph.D. in Computer Science",
    subjects: "Image Processing and Computer Vision, Machine Learning, Bio-Informatics",
    researchAreas: "Image Processing and Computer Vision, Machine Learning, Bio-Informatics",
  },
  7: {
    name: "Malay Kule",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5f69014e1b6ecMalay.jpg",
    email: "malay.kule@example.com",
    qualification: "Ph.D. in Engineering",
    subjects: "Defect Tolerance of Nanoscale Crossbar Circuits, Cryptology, Hardware Security, Securing Social Network",
    researchAreas: "Defect Tolerance of Nanoscale Crossbar Circuits, Cryptology, Hardware Security, Securing Social Network",
  },
  8: {
    name: "Manas Hira",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/cst_mhira.jpg",
    email: "manas.hira@example.com",
    qualification: "Ph.D. in Computer Science",
    subjects: "Circuit Verification using Temporal Logic",
    researchAreas: "Circuit Verification using Temporal Logic",
  },
  9: {
    name: "Nirnay Ghosh",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5f9a84d7abd0433584458_1755658291192872_6819064364054609920_n.jpg",
    email: "nirnay.ghosh@example.com",
    qualification: "Ph.D. in Computer Science",
    subjects: "Cloud Computing, Network Security",
    researchAreas: "Cloud Computing, Network Security",
  },
  10: {
    name: "Samit Biswas",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/samit.jpg",
    email: "samit.biswas@example.com",
    qualification: "Ph.D. in Computer Science",
    subjects: "Machine Learning, Digital Image Processing and Analysis, Document Image Analysis, Computer Vision, Machine-based Translation, Social Network Analysis, Natural Language Processing, Data Mining and Pattern Recognition",
    researchAreas: "Machine Learning, Digital Image Processing and Analysis, Document Image Analysis, Computer Vision, Machine-based Translation, Social Network Analysis, Natural Language Processing, Data Mining and Pattern Recognition",
  },
  11: {
    name: "Sekhar Mandal",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/sekhar__cst.jpg",
    email: "sekhar.mandal@example.com",
    qualification: "Ph.D. in Computer Science",
    subjects: "Image Processing and Pattern Recognition",
    researchAreas: "Image Processing and Pattern Recognition",
  },
  12: {
    name: "Sipra Das Bit",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5e5501ff1f488IMG-20191227-WA0005.jpg",
    email: "sipra.das.bit@example.com",
    qualification: "Ph.D. in Engineering",
    subjects: "Internet of Things (IoT), Mobile Computing, Wireless Sensor Network, Delay Tolerant Network",
    researchAreas: "Internet of Things (IoT), Mobile Computing, Wireless Sensor Network, Delay Tolerant Network",
  },
  13: {
    name: "Somnath Pal",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5dcce6dc80be4Somnath_pal.jpg",
    email: "somnath.pal@example.com",
    qualification: "Ph.D. in Computer Science",
    subjects: "Artificial Intelligence, Logic and Reasoning, Machine Learning and Data Mining, Genetic and Nature-Inspired Algorithms",
    researchAreas: "Artificial Intelligence, Logic and Reasoning, Machine Learning, Data Mining, Genetic and Nature-Inspired Algorithms",
  },
  14: {
    name: "Surajeet Ghosh",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/sjg.png",
    email: "surajeet.ghosh@example.com",
    qualification: "Ph.D. (Engineering)",
    subjects: "Hardware Accelerators for Machine Learning Applications, Machine Learning for Embedded Systems, Neuromorphic Computing, Custom Computing, Computational Architecture for Next Generation Sequencing, FPGA Based Embedded Systems Design, Machine Learning Based Optimization in IoT Protocol, IPv6 Routing Protocol for Low-Power and Lossy Networks (RPL), Hardware Architecture for Network Routing Schemes, Routing Protocol for IoT Networks",
    researchAreas: "Hardware Accelerators for Machine Learning Applications, Machine Learning for Embedded Systems, Neuromorphic Computing, Custom Computing, Computational Architecture for Next Generation Sequencing, FPGA Based Embedded Systems Design, Machine Learning Based Optimization in IoT Protocol, IPv6 Routing Protocol for Low-Power and Lossy Networks (RPL), Hardware Architecture for Network Routing Schemes, Routing Protocol for IoT Networks",
  },
  15: {
    name: "Sulata Mitra",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/61234ce4eaa33IMG_20210823_125033.jpg",
    email: "sulata.mitra@example.com",
    qualification: "Ph.D.",
    subjects: "Ad-hoc network, Multihomed mobile network, Mobile computing",
    researchAreas: "Ad-hoc network, Multihomed mobile network, Mobile computing",
  },
  16: {
    name: "Susanta Chakraborty",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/skc_CSt.jpg",
    email: "susanta.chakraborty@example.com",
    qualification: "Ph.D. (Tech) in Computer Science",
    subjects: "Social Network analysis, Machine learning, AI, Big Data analysis, Test-pattern generation, Video image processing, Quantum Computing",
    researchAreas: "Social Network analysis, Machine learning, AI, Big Data analysis, Test-pattern generation, Video image processing, Quantum Computing",
  },
  17: {
    name: "Tamal Pal",
    photoUrl: "https://www.iiests.ac.in/assets/images/faculty/5dca99372efa6tamal_pal.jpg",
    email: "tamal.pal@example.com",
    qualification: "Ph.D. (Engineering), Computer Science and Technology",
    subjects: "Multimedia (Image, Video etc.) processing and communication, Wireless Network (Wireless sensor network, Delay tolerant network, Vehicular Adhoc network etc.), Multimedia security, Machine Learning, Games programming",
    researchAreas: "Multimedia (Image, Video etc.) processing and communication, Wireless Network (Wireless sensor network, Delay tolerant network, Vehicular Adhoc network etc.), Multimedia security, Machine Learning, Games programming",
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
    `;

    profileContainer.innerHTML = profileHTML;
    profileContainer.style.display = "block";
  } else {
    profileContainer.style.display = "none";
  }
});