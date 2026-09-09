/**
 * Central Official Church Information & Configuration
 * 
 * IMPORTANT CONTENT RULE:
 * Only verified church information is included here.
 * Any unconfirmed items are clearly indicated with structured editable placeholders.
 */

export const CHURCH_INFO = {
  name: "JEHOVA SHALOM INTERNATIONAL MISSIONS",
  shortName: "Jehova Shalom",
  ministryBrand: "JSM Ministries",
  tagline: "A Place of Faith, Hope & God's Presence",
  motto: "Where there is faith, there is hope.",
  missionStatement: "Building lives, strengthening families, and taking the love of Christ to communities around the world.",
  
  // Leadership
  founder: {
    name: "Pastor Philip. M. Murugan",
    qualifications: "M.A., M.Min., M.Div.",
    title: "Founder & General Secretary",
    organization: "JSM Ministries",
    fullTitle: "Pastor Philip. M. Murugan, M.A., M.Min., M.Div.",
    roleDisplay: "Founder & General Secretary — JSM Ministries",
    image: "/pastor-philip.jpg", // Official photograph of Pastor Philip. M. Murugan
    bioPlaceholder: "Pastor Philip. M. Murugan is dedicated to declaring the transformative Gospel of Jesus Christ, equipping believers, and pioneering international mission initiatives through JSM Ministries. With a deep pastoral heart and commitment to theological grounding, he leads the ministry with faith, vision, and a passion for reaching unreached communities.",
    visionQuote: "Our calling is to be vessels of God's peace and truth, touching lives with the Gospel across every neighborhood and nation."
  },

  // Official Contact Phone Numbers
  phones: [
    {
      display: "7708263471",
      tel: "7708263471",
      label: "Main Contact"
    },
    {
      display: "7603958123",
      tel: "7603958123",
      label: "Ministry & Prayer Line"
    }
  ],

  // Structured Editable Placeholders
  contact: {
    address: "Maruthi Nagar, Near Theivam Mordern RiceMill, Sillampatti, Usilampatti, Madurai 625532",
    addressLine1: "Maruthi Nagar",
    addressLine2: "Near Theivam Mordern RiceMill, Sillampatti",
    addressLine3: "Usilampatti, Madurai 625532",
    addressNote: "Main Sanctuary & Ministry Headquarters",
    email: "[contact@jehovashalom.org]",
    prayerEmail: "[prayer@jehovashalom.org]",
    officeHours: "Tuesday – Saturday: 9:00 AM – 5:00 PM"
  },

  // Weekly Gatherings & Services
  services: [
    {
      id: "sunday-1",
      title: "Sunday Morning Worship",
      day: "Sunday",
      time: "9:00 AM",
      type: "First Service",
      description: "An uplifting time of dynamic praise, heartfelt worship, and life-changing biblical preaching.",
      location: "Maruthi Nagar, Sillampatti, Usilampatti, Madurai"
    },
    {
      id: "sunday-2",
      title: "Sunday Divine Service",
      day: "Sunday",
      time: "11:00 AM",
      type: "Second Service",
      description: "Atmosphere of God's presence with extended worship, communion, and practical message for living.",
      location: "Maruthi Nagar, Sillampatti, Usilampatti, Madurai"
    },
    {
      id: "wednesday-study",
      title: "Mid-Week Bible Study",
      day: "Wednesday",
      time: "7:00 PM",
      type: "Discipleship",
      description: "In-depth verse-by-verse exploration of Scripture and interactive discipleship for all ages.",
      location: "Maruthi Nagar, Sillampatti, Usilampatti, Madurai"
    },
    {
      id: "friday-prayer",
      title: "Intercessory Prayer Meeting",
      day: "Friday",
      time: "7:00 PM",
      type: "Prayer & Deliverance",
      description: "A consecrated night of fasting, spiritual warfare, intercession for nations, and healing prayer.",
      location: "Maruthi Nagar, Sillampatti, Usilampatti, Madurai"
    }
  ],

  // Core Values
  coreValues: [
    {
      id: "faith",
      title: "Faith",
      scripture: "Hebrews 11:1",
      description: "Standing firmly on the Word of God and trusting His promises in every season of life."
    },
    {
      id: "love",
      title: "Love",
      scripture: "1 Corinthians 13:13",
      description: "Serving people with compassion, humility, generosity, and Christ-centered unconditional love."
    },
    {
      id: "mission",
      title: "Mission",
      scripture: "Matthew 28:19-20",
      description: "Taking the Gospel beyond our walls and into communities, remote villages, and nations."
    }
  ],

  // Missions Summary
  missionsSummary: {
    heading: "Taking the Gospel Beyond Borders",
    description: "Our mission extends beyond our local community. We are committed to reaching people, serving communities and sharing the hope of Jesus Christ across nations.",
    stats: [
      { label: "Communities Reached", value: 10, suffix: "+" },
      { label: "Nations", value: 5, suffix: "+" },
      { label: "Lives Impacted", value: 1000, suffix: "+" },
      { label: "Mission Volunteers", value: 50, suffix: "+" }
    ]
  },

  // Social Channels
  socials: [
    { name: "YouTube", handle: "[YouTube Channel]", url: "https://youtube.com", icon: "youtube" },
    { name: "Facebook", handle: "[Facebook Page]", url: "https://facebook.com", icon: "facebook" },
    { name: "Instagram", handle: "[Instagram Profile]", url: "https://instagram.com", icon: "instagram" },
    { name: "WhatsApp", handle: "7708263471", url: "https://wa.me/917708263471", icon: "message-circle" }
  ]
};
