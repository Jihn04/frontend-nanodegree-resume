var work = {
	"jobs": [
		{
			"employer": "Pison Contents Inc.",
			"title": "Software Engineer",
			"location": "Berkeley, CA",
			"dates": "Aug 2014 - Aug 2015",
			"description": "Recent job"
		}, 
		{
			"employer": "Lumi Digital Corp.",
			"title": "Software Engineer",
			"location": "San Jose, CA",
			"dates": "May 2014 - Aug 2014",
			"description": "First job"
		}
	],
	"display": function() {

		if (work.jobs.length > 0) {
			for (job in work.jobs) {
				
				$("#workExperience").append(HTMLworkStart);
				
				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var formattedEmployerTitle = formattedEmployer+formattedTitle
				$(".work-entry:last").append(formattedEmployerTitle);
				
				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);
				var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				$(".work-entry:last").append(formattedLocation);
				var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);
			}
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "MAPA",
			"dates": "Aug 2014 - Dec 2014",
			"description": "MAPA project",
			"images": ["images/197x148.gif"]
		}, 
		{
			"title": "Pacman",
			"dates": "Feb 2014 - May 2014",
			"description": "The game pacman",
			"images": ["images/197x148.gif"]
		}
	],
	"display": function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);		
				}
			}			
		}
	}
};

var bio = {
	"name": "Geehoon Uhm",
	"role": "Web Developer",
	"contacts": {
		"mobile": "213-703-5469",
		"email": "geehoon.uhm@gmail.com",
		"location": "San Francisco Bay Area"
	},
	"welcomeMessage": "Welcome!",
	"skills": ["HTML", "CSS", "JavaScript", "BootStrap", "Jquery"],
	"bioPic": "images/lauren-Cropped2 - Final.png",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedRole);
		
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedName);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);

		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedPic);

		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedLocation);
	}
};

var education = {
	"schools": [
		{
			"name": "UC Berkeley",
			"location": "Berkeley, CA",
			"degree": "Bachelor of Science",
			"major": "Electrical Engineering and Computer Sciences",
			"dates": "Aug 2013 - Aug 2015",
			"url": "www.berkeley.edu"
		}
	], 
	"onlineCourses": [
		{
			"title": "Front-end Dev",
			"school": "Udacity",
			"dates": "May 2015 - Aug 2015",
			"url": "www.udacity.com"
		}
	],
	"display": function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedName + formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();

// $("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

