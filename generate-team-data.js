// Team member IDs and names for reference
const teamMembers = [
  { id: 'pitambar', name: 'Pitambar Sahu', role: 'Faculty Advisor', image: 'assets/Pitambar.jpeg' },
  { id: 'giridhari', name: 'Giridhari Padhy', role: 'Coordinator (Media Production)', image: 'assets/Giridhari.jpg' },
  { id: 'meghaa', name: 'P. D. Meghaa Rani', role: 'Coordinator (Creative Projects)', image: 'assets/Meghaa.png' },
  { id: 'simran', name: 'D.Simran Patra', role: 'Lead, Art & Visuals', image: 'assets/Simran.png' },
  { id: 'meghna', name: 'Meghna Panda', role: 'Lead, Communications & Media', image: 'assets/Meghna.png' },
  { id: 'ritesh', name: 'Challa Ritesh', role: 'Lead, Reels & Shorts', image: 'assets/Ritesh.jpg' },
  { id: 'komalkant', name: 'Komalkant Mohapatro', role: 'Associate, Photography', image: 'assets/Komalkant.png' },
  { id: 'slok', name: 'Slok Samarth Swain', role: 'Associate, Creative Writing', image: 'assets/Slok.png' },
  { id: 'saumya', name: 'Saumya Saurabha Jena', role: 'Associate, Cinematography', image: 'assets/Saumya.jpeg' },
  { id: 'bharat', name: 'D. Bharat Rao', role: 'Media Crew', image: 'assets/Bharat.png' },
  { id: 'arpita', name: 'Arpita Rout', role: 'Media Crew', image: 'assets/ARPITA.jpg' },
  { id: 'subhransu', name: 'Subhransu Sekhar Pradhan', role: 'Media Crew', image: 'assets/Subhransu.jpg' },
  { id: 'soumya', name: 'Soumya Ranjan Sahoo', role: 'Media Crew', image: 'assets/Soumya.jpg' },
  { id: 'swagatika', name: 'Swagatika Behera', role: 'Media Crew', image: 'assets/Swagatika.jpg' },
  { id: 'sthitapragyan', name: 'Sthitapragyan Panda', role: 'Media Crew', image: 'assets/Sthitapragyan.jpg' },
  { id: 'sujit', name: 'Sujit Kumar Sahoo', role: 'Media Crew', image: 'assets/Sujit.jpg' },
  { id: 'sushree', name: 'Sushree Sangita Dash', role: 'Media Crew', image: 'assets/Sushree.jpg' },
  { id: 'swastik', name: 'Swastik Ranjan Panda', role: 'Media Crew', image: 'assets/Swastik.jpg' },
  { id: 'swayam', name: 'Swayam Prakash Panda', role: 'Media Crew', image: 'assets/Swayam.jpg' },
  { id: 'tanmaya', name: 'Tanmaya Panda', role: 'Media Crew', image: 'assets/Tanmaya.jpg' },
  { id: 'tapas', name: 'Tapas Ranjan Nayak', role: 'Media Crew', image: 'assets/Tapas.jpg' },
  { id: 'trisha', name: 'Trisha Priyadarshini Panda', role: 'Media Crew', image: 'assets/Trisha.jpg' },
  { id: 'yuvraj', name: 'Yuvraj Sahoo', role: 'Media Crew', image: 'assets/Yuvraj.jpg' },
  { id: 'abhisek', name: 'Abhisek Behera', role: 'Media Crew', image: 'assets/Abhisek.jpg' },
  { id: 'aditya', name: 'Aditya Ranjan Behera', role: 'Media Crew', image: 'assets/Aditya.jpg' },
  { id: 'alisha', name: 'Alisha Panda', role: 'Media Crew', image: 'assets/Alisha.jpg' },
  { id: 'ananya', name: 'Ananya Panda', role: 'Media Crew', image: 'assets/Ananya.jpg' },
  { id: 'ankit', name: 'Ankit Kumar Sahoo', role: 'Media Crew', image: 'assets/Ankit.jpg' },
  { id: 'anurag', name: 'Anurag Panda', role: 'Media Crew', image: 'assets/Anurag.jpg' },
  { id: 'debashis', name: 'Debashis Panda', role: 'Media Crew', image: 'assets/Debashis.jpg' }
];

// Generate blank teamData object
const teamData = {};
teamMembers.forEach(member => {
  teamData[member.id] = {
    name: member.name,
    role: member.role,
    image: member.image,
    skills: [],
    education: ''
  };
});

console.log(JSON.stringify(teamData, null, 2));
