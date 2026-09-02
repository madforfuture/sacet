export interface FacultyMember {
  srNo?: number;
  name: string;
  designation: 'Professor' | 'Associate Professor' | 'Assistant Professor';
  qual: string;
  university: string;
  dateOfDegree: string;
  specialization: string;
  doj: string;
  designationAtJoining?: string;
  dateDesignated?: string;
  level: 'UG' | 'PG';
}

export const facultyData: FacultyMember[] = [
  // UG Faculty
  {
    name: "Dr P HARINI",
    designation: "HoD & Professor",
    qual: "Ph.D",
    university: "JNTU, Anantapur",
    dateOfDegree: "31-03-2011",
    specialization: "CSE",
    doj: "12-07-2004",
    designationAtJoining: "Associate Professor",
    dateDesignated: "01-08-2006",
    level: "UG"
  },
  {
    name: "Dr YEZARLA CHITTIBABU",
    designation: "Professor",
    qual: "Ph.D",
    university: "Acharya Nagarjuna University",
    dateOfDegree: "13-06-2019",
    specialization: "CSE",
    doj: "28-06-2004",
    designationAtJoining: "Assistant Professor",
    dateDesignated: "01-07-2023",
    level: "UG"
  },
  {
    name: "Dr RATNA RAJU MUKIRI",
    designation: "Professor",
    qual: "Ph.D",
    university: "Veer Bahadur Singh Purvanchal University",
    dateOfDegree: "16-04-2014",
    specialization: "CSE",
    doj: "01-12-2016",
    designationAtJoining: "Associate Professor",
    dateDesignated: "01-07-2023",
    level: "UG"
  },
  {
    name: "Dr. M. RAMESH",
    designation: "Professor",
    qual: "Ph.D",
    university: "Acharya Nagarjuna University",
    dateOfDegree: "29-11-2014",
    specialization: "CSE",
    doj: "05-06-2023",
    designationAtJoining: "Professor",
    dateDesignated: "05-06-2023",
    level: "UG"
  },
  {
    name: "Dr AMARTHALURI THIRUPATHAIAH",
    designation: "Associate Professor",
    qual: "Ph.D",
    university: "Rayalaseema University",
    dateOfDegree: "14-10-2019",
    specialization: "CSE",
    doj: "01-03-2005",
    designationAtJoining: "Assistant Professor",
    dateDesignated: "02-12-2019",
    level: "UG"
  },
  {
    name: "Dr SUBBARAO KATTEDA",
    designation: "Associate Professor",
    qual: "Ph.D",
    university: "JNTU, Hyderabad",
    dateOfDegree: "09-01-2020",
    specialization: "CSE",
    doj: "01-06-2006",
    designationAtJoining: "Assistant Professor",
    dateDesignated: "09-01-2020",
    level: "UG"
  },
  {
    name: "Dr PRASUNA GRANDHI",
    designation: "Associate Professor",
    qual: "Ph.D",
    university: "Acharya Nagarjuna University",
    dateOfDegree: "18-12-2020",
    specialization: "CSE",
    doj: "14-07-2016",
    designationAtJoining: "Assistant Professor",
    dateDesignated: "01-01-2021",
    level: "UG"
  },
  {
    name: "Dr. E. SANDEEP KRUPAKAR",
    designation: "Associate Professor",
    qual: "Ph.D",
    university: "Rayalaseema University",
    dateOfDegree: "30-11-2019",
    specialization: "CSE",
    doj: "04-07-2022",
    designationAtJoining: "Associate Professor",
    dateDesignated: "04-07-2022",
    level: "UG"
  },
  {
    name: "Dr P V SUBBARAMASARMA",
    designation: "Associate Professor",
    qual: "Ph.D",
    university: "Rayalaseema University",
    dateOfDegree: "15-04-2024",
    specialization: "CSE",
    doj: "01-07-2005",
    designationAtJoining: "Assistant Professor",
    dateDesignated: "01-08-2007",
    level: "UG"
  },
  {
    name: "Dr. NAGESH BABU DASARI",
    designation: "Associate Professor",
    qual: "Ph.D",
    university: "JNTUA, Anantapur",
    dateOfDegree: "19-10-2023",
    specialization: "CSE",
    doj: "02-06-2008",
    designationAtJoining: "Assistant Professor",
    dateDesignated: "01-11-2023",
    level: "UG"
  },
  {
    name: "Mr. S AMARNATH BABU",
    designation: "Associate Professor",
    qual: "M.Tech",
    university: "JNTU, Hyderabad",
    dateOfDegree: "30-06-2007",
    specialization: "CSE",
    doj: "11-05-2006",
    designationAtJoining: "Assistant Professor",
    dateDesignated: "01-07-2008",
    level: "UG"
  },
  {
    name: "Mr. PARSAM VAMSI KRISHNA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "17-06-2026",
    specialization: "CSE",
    doj: "17-06-2026",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mrs. JANGALA RAJYA LAKSHMI",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "01-08-2018",
    specialization: "CSE",
    doj: "01-04-2026",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Ms. SUNDARAM HAMSALEKHA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "17-06-2026",
    specialization: "CSE",
    doj: "17-06-2026",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mr. N LAKSHMI NARAYANA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "30-11-2010",
    specialization: "CSE",
    doj: "16-07-2005",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mrs. MADHURI DRAKSHARAM",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "24-11-2012",
    specialization: "CSE",
    doj: "06-06-2009",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mr. TULASI SESHASAI",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "Anna University",
    dateOfDegree: "17-08-2011",
    specialization: "CSE",
    doj: "02-07-2012",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mrs. MAMIDALA ANUSHA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "Acharya Nagarjuna University",
    dateOfDegree: "18-10-2016",
    specialization: "CSE",
    doj: "01-07-2019",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mrs. V L N S SWAPNIKA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "21-09-2019",
    specialization: "CSE",
    doj: "22-11-2019",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mrs. N SULAKSHNA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "13-06-2016",
    specialization: "CSE",
    doj: "02-12-2019",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mr. K SAI KRISHNA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "31-12-2015",
    specialization: "CSE",
    doj: "02-07-2018",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mr. D SHYAM BABU",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "Acharya Nagarjuna University",
    dateOfDegree: "30-01-2010",
    specialization: "CSE",
    doj: "10-10-2011",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mrs. SINDHURA PASUPULETI",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "09-07-2020",
    specialization: "CSE",
    doj: "01-10-2021",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mr. GUNTI RAJESH",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "31-08-2018",
    specialization: "CSE",
    doj: "01-10-2021",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mr. SURYA KIRAN KUMAR K",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "31-12-2011",
    specialization: "CSE",
    doj: "07-10-2021",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mr. BALA KRISHNA YAKKALA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "29-09-2012",
    specialization: "SE",
    doj: "01-07-2015",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mr. KUNCHALA RAMESH",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "Acharya Nagarjuna University",
    dateOfDegree: "25-01-2010",
    specialization: "CSE",
    doj: "01-02-2022",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mrs. M. PRAVEENA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "30-11-2012",
    specialization: "CSE",
    doj: "01-03-2014",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mr. C.V.C.UDAY BHASKAR",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "Andhra University",
    dateOfDegree: "29-06-2002",
    specialization: "CSE",
    doj: "05-06-2023",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mrs. M. NAGA PADMAJA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "31-12-2015",
    specialization: "CSE",
    doj: "05-06-2023",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mrs. Y. SMILE",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "13-03-2023",
    specialization: "CSE",
    doj: "05-06-2023",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mrs. SYED ARIFA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "28-02-2019",
    specialization: "CSE",
    doj: "15-07-2024",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mrs. DEVARAKONDA SOWMYA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "10-07-2024",
    specialization: "CSE",
    doj: "01-08-2024",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mr. KARRI RAMESH BABU",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "10-05-2013",
    specialization: "CSE",
    doj: "17-01-2024",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Ms. PASUPULETI MADHURI",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "10-07-2024",
    specialization: "CSE",
    doj: "01-08-2024",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mr. SHAIK JILANI",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUA, Anantapur",
    dateOfDegree: "22-12-2016",
    specialization: "CN",
    doj: "15-05-2024",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Ms. B SIVA PAVANI",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "04-08-2025",
    specialization: "CSE",
    doj: "14-08-2025",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mrs. K LAVANYA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "04-08-2025",
    specialization: "CSE",
    doj: "14-08-2025",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Ms. A LAKSHMI PRIYANKA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "04-08-2025",
    specialization: "CSE",
    doj: "14-08-2025",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },
  {
    name: "Mrs. M. SUVARNA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "01-07-2025",
    specialization: "CSE",
    doj: "01-08-2025",
    designationAtJoining: "Assistant Professor",
    level: "UG"
  },

  // PG Faculty
  {
    name: "Dr. G SANKAR",
    designation: "Associate Professor",
    qual: "Ph.D",
    university: "Pondicherry University",
    dateOfDegree: "06-06-2016",
    specialization: "CSE",
    doj: "04-07-2022",
    designationAtJoining: "Associate Professor",
    dateDesignated: "04-07-2022",
    level: "PG"
  },
  {
    name: "Ms. B. CHARANI",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "11-11-2019",
    specialization: "CSE",
    doj: "04-07-2022",
    designationAtJoining: "Assistant Professor",
    level: "PG"
  },
  {
    name: "Mrs. A. KAVYA",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "12-11-2012",
    specialization: "CSE",
    doj: "01-12-2020",
    designationAtJoining: "Assistant Professor",
    level: "PG"
  },
  {
    name: "Mr. P SANKARA RAO",
    designation: "Assistant Professor",
    qual: "M.Tech",
    university: "JNTUK, Kakinada",
    dateOfDegree: "14-12-2015",
    specialization: "CSE",
    doj: "04-07-2022",
    designationAtJoining: "Assistant Professor",
    level: "PG"
  }
];
