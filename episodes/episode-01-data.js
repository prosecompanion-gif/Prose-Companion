// Episode 1: How to Access Your Case Files Online
// State-by-state party access / case search systems
const episodeData = {
    "AL": {
        name: "Alabama",
        systemName: "Alacourt.com",
        description: "Alabama uses Alacourt as its statewide electronic case management system. Parties can search for their cases and view filed documents through the public portal. Some counties also provide access through individual circuit clerk websites.",
        steps: [
            "Go to the Alabama Alacourt website.",
            "Select your county from the dropdown menu.",
            "Search by your name or case number.",
            "View your case details, filing dates, and scheduled hearings.",
            "For document copies, you may need to contact the circuit clerk's office or visit in person."
        ],
        links: [
            { name: "Alacourt.com - Case Search", url: "https://v2.alacourt.com/" },
            { name: "Alabama Judicial System", url: "https://judicial.alabama.gov/" },
            { name: "Find Your County Circuit Clerk", url: "https://judicial.alabama.gov/library/courts" }
        ]
    },
    "AK": {
        name: "Alaska",
        systemName: "CourtView",
        description: "Alaska provides CourtView, a free public access system where anyone can look up court cases. As a party, you can find your case, see all filings, and check hearing schedules. The system covers all Alaska courts statewide.",
        steps: [
            "Go to Alaska CourtView online.",
            "Choose to search by name, case number, or attorney.",
            "Enter your search details and select the court location.",
            "Click on your case to view the case history, filings, and upcoming events.",
            "Documents may be available for viewing or you may need to request copies from the clerk."
        ],
        links: [
            { name: "Alaska CourtView - Case Search", url: "https://records.courts.alaska.gov/eaccess/home.page.2" },
            { name: "Alaska Court System - Self-Help", url: "https://courts.alaska.gov/shc/index.htm" }
        ]
    },
    "AZ": {
        name: "Arizona",
        systemName: "AZTurboCourt / County Portals",
        description: "Arizona does not have a single statewide case access portal. Each county operates its own system. Maricopa County uses eCourt, Pima uses the Consolidated Justice Court system, etc. As a party, you access your case through your specific county's court website.",
        steps: [
            "Identify which county your case is filed in.",
            "Go to that county's Superior Court website.",
            "Look for 'Case Search,' 'Public Access,' or 'eCourt' on their website.",
            "Search by your name or case number.",
            "View case details, filed documents, and hearing dates."
        ],
        links: [
            { name: "Maricopa County - eCourt Public Access", url: "https://www.superiorcourt.maricopa.gov/docket/" },
            { name: "Pima County - Case Search", url: "https://www.agave.cosc.pima.gov/" },
            { name: "Arizona Courts - Find Your Court", url: "https://www.azcourts.gov/AZ-Courts/Find-a-Court" }
        ]
    },
    "AR": {
        name: "Arkansas",
        systemName: "CourtConnect",
        description: "Arkansas uses CourtConnect, a free online system where parties can search for and view their court cases. It covers circuit courts statewide and lets you see filings, hearing dates, and case status.",
        steps: [
            "Go to Arkansas CourtConnect.",
            "Select 'Circuit' for the court type.",
            "Choose your county.",
            "Search by name or case number.",
            "View your case details including all filings and scheduled hearings."
        ],
        links: [
            { name: "Arkansas CourtConnect", url: "https://caseinfo.arcourts.gov/cconnect/PROD/public/ck_public_qry_main.cp_main_idx" },
            { name: "Arkansas Judiciary", url: "https://www.arcourts.gov/" }
        ]
    },

    "CA": {
        name: "California",
        systemName: "County Superior Court Portals",
        description: "California does not have a single statewide case access system. Each county Superior Court operates its own online portal. Los Angeles, San Francisco, and other large counties have robust online systems. As a party, you use your county's specific portal to access your case.",
        steps: [
            "Identify which county your case is in.",
            "Go to that county's Superior Court website.",
            "Look for 'Online Services,' 'Case Access,' or 'Case Search.'",
            "Create an account if required (some counties require registration for full access).",
            "Search by your case number or name to view filings, hearing dates, and documents."
        ],
        links: [
            { name: "Los Angeles Superior Court - Case Access", url: "https://www.lacourt.org/casesummary/ui/" },
            { name: "San Diego Superior Court - Case Search", url: "https://www.sdcourt.ca.gov/sdcourt/civil2/caseinformation" },
            { name: "California Courts - Find Your Court", url: "https://www.courts.ca.gov/find-my-court.htm" }
        ]
    },
    "CO": {
        name: "Colorado",
        systemName: "Colorado Courts E-Filing / Case Search",
        description: "Colorado Judicial Branch provides a statewide case search system. Parties can look up cases across all Colorado courts. For full document access, registered e-filing users may have additional access to view filed documents online.",
        steps: [
            "Go to the Colorado Judicial Branch case search page.",
            "Search by case number, party name, or attorney name.",
            "Select your case from the results.",
            "View docket entries, hearing dates, and case status.",
            "For full document access, register on the Colorado Courts E-Filing system."
        ],
        links: [
            { name: "Colorado Courts - Case Search", url: "https://www.courts.state.co.us/dockets/index.cfm" },
            { name: "Colorado Courts E-Filing", url: "https://www.courts.state.co.us/Administration/Section.cfm?Section=efiling" },
            { name: "Colorado Self-Help Center", url: "https://www.courts.state.co.us/Self_Help/index.cfm" }
        ]
    },
    "CT": {
        name: "Connecticut",
        systemName: "Civil/Family Case Look-Up",
        description: "Connecticut Judicial Branch provides an online case look-up system for civil and family cases. Parties can search by name, case number, or return date. Criminal case information is available through a separate system.",
        steps: [
            "Go to the Connecticut Judicial Branch case look-up page.",
            "Choose the case type (civil, family, housing, or small claims).",
            "Search by party name, case number, or return date.",
            "View case details, filed motions, and hearing schedule.",
            "For document copies, contact the clerk's office at your courthouse."
        ],
        links: [
            { name: "CT Civil/Family Case Look-Up", url: "https://www.jud.ct.gov/jud2.htm" },
            { name: "CT Judicial Branch - Self-Help", url: "https://www.jud.ct.gov/selfhelp.htm" }
        ]
    },
    "DE": {
        name: "Delaware",
        systemName: "Delaware Courts Case Search",
        description: "Delaware provides online case search through each court level. The Court of Common Pleas, Superior Court, and Family Court each have their own search systems accessible from the Delaware Courts website.",
        steps: [
            "Go to the Delaware Courts website.",
            "Select which court your case is in (Superior, Common Pleas, Family, etc.).",
            "Click on 'Case Search' or 'Search Court Records.'",
            "Enter your case number or party name.",
            "View case details, docket entries, and scheduled hearings."
        ],
        links: [
            { name: "Delaware Courts - Public Records", url: "https://courts.delaware.gov/records/" },
            { name: "Delaware Superior Court - Case Search", url: "https://courts.delaware.gov/superior/caseSearch.aspx" },
            { name: "Delaware Courts Help", url: "https://courts.delaware.gov/help/" }
        ]
    },

    "FL": {
        name: "Florida",
        systemName: "Clerk of Court Portals / MyFloridaCounty",
        description: "Florida case access is managed by each county's Clerk of Court. Many counties use the same platform (Odyssey or similar), but you access it through your specific county clerk's website. The Florida Courts website can direct you to the right place.",
        steps: [
            "Identify which county your case was filed in.",
            "Go to that county Clerk of Court's website.",
            "Look for 'Official Records Search,' 'Court Records,' or 'Case Search.'",
            "Search by case number or your name.",
            "View docket entries, filed documents, hearing dates, and case status."
        ],
        links: [
            { name: "Miami-Dade Clerk - Case Search", url: "https://www2.miami-dadeclerk.com/ocs/search.aspx" },
            { name: "Hillsborough County Clerk", url: "https://www.hillsclerk.com/Public-Records/Court-Records-Search" },
            { name: "Florida Courts - Find Your Clerk", url: "https://www.flcourts.gov/Florida-Courts/Clerks" }
        ]
    },
    "GA": {
        name: "Georgia",
        systemName: "County Clerk Portals / Odyssey",
        description: "Georgia case access varies by county. Many Georgia counties use the Odyssey case management system, but access is through each county's Superior Court Clerk website. The Georgia Courts website helps you find the right county portal.",
        steps: [
            "Determine which county your case is filed in.",
            "Visit that county's Superior Court Clerk website.",
            "Look for 'Case Search,' 'Court Records,' or 'Odyssey Portal.'",
            "Search by case number or your name.",
            "View your case information, docket entries, and hearing schedule."
        ],
        links: [
            { name: "Fulton County - Case Search", url: "https://publicrecordsaccess.fultoncountyga.gov/Portal/" },
            { name: "Georgia Courts - Find Your Court", url: "https://www.georgiacourts.gov/find-courts" },
            { name: "Georgia Court Self-Help", url: "https://georgiacourts.gov/self-help/" }
        ]
    },
    "HI": {
        name: "Hawaii",
        systemName: "eCourt Kokua",
        description: "Hawaii provides eCourt Kokua, a free statewide public access system. Any party can search for their case and view case information, hearing calendars, and docket entries for all Hawaii state courts.",
        steps: [
            "Go to Hawaii eCourt Kokua.",
            "Search by case ID, citation number, or party name.",
            "Select the correct circuit (First, Second, Third, or Fifth).",
            "View your case details, calendar, and docket entries.",
            "For copies of specific documents, contact the court clerk."
        ],
        links: [
            { name: "Hawaii eCourt Kokua - Case Search", url: "https://www.courts.state.hi.us/legal_references/records/jims" },
            { name: "Hawaii Judiciary", url: "https://www.courts.state.hi.us/" }
        ]
    },
    "ID": {
        name: "Idaho",
        systemName: "iCourt Portal",
        description: "Idaho uses the iCourt system statewide. Parties can access their case information through the iCourt portal. You can view filed documents, hearing schedules, and case status online.",
        steps: [
            "Go to the Idaho iCourt Portal (MyCase link).",
            "Search by case number, party name, or attorney.",
            "Select your case from the results.",
            "View case details, documents, and hearing dates.",
            "Register for an iCourt account for enhanced access to your case documents."
        ],
        links: [
            { name: "Idaho iCourt - MyCase Search", url: "https://mycourts.idaho.gov/odysseyportal" },
            { name: "Idaho Court Assistance", url: "https://courtselfhelp.idaho.gov/" }
        ]
    },

    "IL": {
        name: "Illinois",
        systemName: "County Circuit Clerk Portals",
        description: "Illinois case access is managed at the county level through each Circuit Clerk's office. Cook County has its own system, and many other counties use the Judici platform. You search through your specific county's system.",
        steps: [
            "Identify which county your case is filed in.",
            "Visit that county's Circuit Clerk website.",
            "Look for 'Case Search,' 'Online Records,' or 'Judici.'",
            "Search by case number or party name.",
            "View docket information, hearing dates, and case status."
        ],
        links: [
            { name: "Cook County Clerk - Case Search", url: "https://casesearch.cookcountyclerkofcourt.org/DocketSearch" },
            { name: "Judici - Illinois County Courts", url: "https://www.judici.com/" },
            { name: "Illinois Courts - Find Your Court", url: "https://www.illinoiscourts.gov/courts-directory" }
        ]
    },
    "IN": {
        name: "Indiana",
        systemName: "Odyssey Case Search (MyCase)",
        description: "Indiana uses a statewide system called Odyssey that provides public access through the MyCase portal. You can search for cases across all Indiana courts and view case information, docket entries, and hearing schedules.",
        steps: [
            "Go to the Indiana MyCase public portal.",
            "Search by case number, party name, or attorney name.",
            "Select the county if searching by name.",
            "Click on your case to view full details.",
            "View docket entries, hearing calendar, and case status."
        ],
        links: [
            { name: "Indiana MyCase - Public Search", url: "https://public.courts.in.gov/mycase/" },
            { name: "Indiana Courts Self-Service Center", url: "https://www.in.gov/courts/selfservice/" }
        ]
    },
    "IA": {
        name: "Iowa",
        systemName: "Iowa Courts Online (ICIS)",
        description: "Iowa provides the Iowa Court Information System (ICIS) through Iowa Courts Online. Parties can search for their cases statewide and view case details, schedules, and docket information at no cost.",
        steps: [
            "Go to Iowa Courts Online.",
            "Click 'Iowa Courts Online' or 'Case Search.'",
            "Search by case number, name, or citation.",
            "Select the correct county and case type.",
            "View case details, docket entries, and hearing schedule."
        ],
        links: [
            { name: "Iowa Courts Online - Case Search", url: "https://www.iowacourts.gov/for-the-public/court-case-information" },
            { name: "Iowa Courts - Representing Yourself", url: "https://www.iowacourts.gov/for-the-public/representing-yourself" }
        ]
    },
    "KS": {
        name: "Kansas",
        systemName: "District Court Records Search",
        description: "Kansas provides online case search through each judicial district. Many Kansas courts are transitioning to a new case management system. You can search by county through the Kansas District Court portal.",
        steps: [
            "Go to the Kansas case search portal for your judicial district.",
            "Select your county.",
            "Search by case number or party name.",
            "View case details, docket entries, and upcoming hearings.",
            "For document copies, contact the district court clerk's office."
        ],
        links: [
            { name: "Kansas District Court Records", url: "https://www.kscourts.org/Public/Case-Search" },
            { name: "Johnson County Case Search", url: "https://www.jocogov.org/dept/district-court/case-records" },
            { name: "Kansas Courts Self-Help", url: "https://www.kscourts.org/Public/Self-Help" }
        ]
    },

    "KY": {
        name: "Kentucky",
        systemName: "Kentucky CourtNet 2.0 (KYeCourts)",
        description: "Kentucky uses the KYeCourts system (formerly CourtNet). This statewide system allows parties to search for and view their case information online. You can see filings, hearing dates, and case status for all Kentucky courts.",
        steps: [
            "Go to the Kentucky Court of Justice case search page.",
            "Click on 'KYeCourts' or 'CourtNet' case search.",
            "Search by case number, party name, or attorney.",
            "Select your county from the options.",
            "View case details, all filings, and scheduled hearing dates."
        ],
        links: [
            { name: "Kentucky CourtNet - Case Search", url: "https://kcoj.kycourts.net/kyecourts/" },
            { name: "Kentucky Courts Help", url: "https://courts.ky.gov/resources/legalhelp/Pages/default.aspx" }
        ]
    },
    "LA": {
        name: "Louisiana",
        systemName: "Parish Clerk of Court Portals",
        description: "Louisiana case access is managed by each parish (county equivalent) Clerk of Court. There is no single statewide system. Each parish has its own search portal. Large parishes like Orleans and East Baton Rouge have robust online systems.",
        steps: [
            "Identify which parish your case is filed in.",
            "Visit that parish's Clerk of Court website.",
            "Look for 'Case Search,' 'Records Search,' or 'Civil Records.'",
            "Search by case number, party name, or filing date.",
            "View case docket, filings, and hearing information."
        ],
        links: [
            { name: "Orleans Parish - Case Search", url: "https://www.orleanscdc.com/search.aspx" },
            { name: "East Baton Rouge Clerk of Court", url: "https://www.ebrclerkofcourt.org/" },
            { name: "Louisiana Courts", url: "https://www.lasc.org/About_the_Court/Courts" }
        ]
    },
    "ME": {
        name: "Maine",
        systemName: "Maine Courts Case Search",
        description: "Maine Judicial Branch provides an online case search system. Parties can look up their cases, view docket information, and check hearing schedules. The system covers all Maine courts.",
        steps: [
            "Go to the Maine Judicial Branch case search page.",
            "Search by case number, party name, or attorney name.",
            "Select the court location (county).",
            "View your case details, docket entries, and next hearing date.",
            "For copies of filed documents, contact the Clerk's Office."
        ],
        links: [
            { name: "Maine Courts - Case Search", url: "https://portal.courts.maine.gov/Portal/" },
            { name: "Maine Courts Self-Help", url: "https://www.courts.maine.gov/self-help/index.html" }
        ]
    },
    "MD": {
        name: "Maryland",
        systemName: "Maryland Judiciary Case Search (Party Access)",
        description: "Maryland uses a system specifically called 'Case Search' for public access and 'Party Access' for parties to a case. With Party Access, you can see more detailed information about your own case including documents that may not appear in regular public search. Maryland also uses MDEC (Maryland Electronic Courts) for e-filing and document access.",
        steps: [
            "Go to Maryland Judiciary Case Search.",
            "Search by party name, case number, or company name.",
            "For enhanced access, use the MDEC system and register for a Party Access account.",
            "Log in to MDEC to view all documents filed in your case.",
            "View filings, hearing schedules, and case status in real time."
        ],
        links: [
            { name: "Maryland Case Search", url: "https://casesearch.courts.state.md.us/casesearch/" },
            { name: "MDEC - Maryland Electronic Courts", url: "https://mdecportal.courts.state.md.us/mdec/" },
            { name: "Maryland Courts Self-Help", url: "https://www.mdcourts.gov/selfhelp" },
            { name: "People's Law Library of Maryland", url: "https://www.peoples-law.org/" }
        ]
    },

    "MA": {
        name: "Massachusetts",
        systemName: "MassCourts Case Search / eFiling",
        description: "Massachusetts provides online case search through the Trial Court's electronic filing system. Parties can search for their cases and view case information. Some courts also provide access through individual courthouse portals.",
        steps: [
            "Go to the Massachusetts Trial Court case search.",
            "Select the court department (Superior, District, Housing, etc.).",
            "Search by case number, party name, or docket number.",
            "View case details, docket entries, and hearing dates.",
            "For e-filed documents, use the Massachusetts eFiling system (registration required)."
        ],
        links: [
            { name: "Massachusetts Trial Court - Case Search", url: "https://www.masscourts.org/efilefour/UserLogin?associatedCourtType=D" },
            { name: "Mass.gov - Courts Self-Help", url: "https://www.mass.gov/topics/courts-self-help" }
        ]
    },
    "MI": {
        name: "Michigan",
        systemName: "MiCourt / County Court Portals",
        description: "Michigan is rolling out a statewide e-filing system called MiCourt. Currently, most case access is through individual county court websites. Many Michigan courts use the BS&A or Odyssey systems. As a party, you search through your county's court portal.",
        steps: [
            "Identify which county your case is filed in.",
            "Visit that county's court website (Circuit or District Court).",
            "Look for 'Case Search,' 'Records,' or 'Online Services.'",
            "Search by case number or party name.",
            "View case information, docket entries, and scheduled hearings."
        ],
        links: [
            { name: "Wayne County Circuit Court - Case Search", url: "https://cmspublic.3702.waynecounty.com/" },
            { name: "Michigan Courts - Find Your Court", url: "https://www.courts.michigan.gov/court-directory/" },
            { name: "Michigan Legal Help", url: "https://michiganlegalhelp.org/" }
        ]
    },
    "MN": {
        name: "Minnesota",
        systemName: "Minnesota Court Records Online (MCRO)",
        description: "Minnesota provides Minnesota Court Records Online (MCRO), formerly called MPA (Minnesota Public Access). This free statewide system lets parties search for their cases and view case information across all Minnesota courts.",
        steps: [
            "Go to Minnesota Court Records Online.",
            "Agree to the terms of use.",
            "Search by case number, party name, or attorney.",
            "Select the county where your case is filed.",
            "View case details, hearing dates, docket entries, and case status."
        ],
        links: [
            { name: "Minnesota Court Records Online", url: "https://publicaccess.courts.state.mn.us/CaseSearch" },
            { name: "Minnesota Courts Self-Help", url: "https://www.mncourts.gov/Help-Topics.aspx" }
        ]
    },
    "MS": {
        name: "Mississippi",
        systemName: "MEC (Mississippi Electronic Courts)",
        description: "Mississippi uses the Mississippi Electronic Courts (MEC) system for case management. The system provides public access to case information. Parties can search for their cases and view docket information.",
        steps: [
            "Go to the Mississippi Electronic Courts (MEC) public access portal.",
            "Search by case number or party name.",
            "Select the county or court.",
            "View your case details, filings list, and hearing calendar.",
            "For full document access, contact the Circuit Clerk's office."
        ],
        links: [
            { name: "Mississippi MEC - Case Search", url: "https://www.courts.ms.gov/mec/mec.html" },
            { name: "Mississippi Courts", url: "https://courts.ms.gov/" }
        ]
    },

    "MO": {
        name: "Missouri",
        systemName: "Case.net",
        description: "Missouri provides Case.net, a free statewide online system operated by the Office of State Courts Administrator. Parties can search for and view case information for all Missouri circuit courts, including filings, docket entries, and hearing schedules.",
        steps: [
            "Go to Missouri Case.net.",
            "Accept the terms of use.",
            "Search by case number, party name (litigant), or attorney.",
            "Select the county and court (Circuit, Associate, etc.).",
            "View complete case details, all docket entries, and hearing dates."
        ],
        links: [
            { name: "Missouri Case.net - Case Search", url: "https://www.courts.mo.gov/casenet/cases/searchCases.do" },
            { name: "Missouri Courts Self-Help", url: "https://www.courts.mo.gov/page.jsp?id=704" }
        ]
    },
    "MT": {
        name: "Montana",
        systemName: "Full Court Enterprise Public Access",
        description: "Montana uses the Full Court Enterprise system. The Montana Courts provide a public access portal where parties can search for their cases and view case information, docket entries, and hearing dates.",
        steps: [
            "Go to the Montana Courts public case search portal.",
            "Search by case number, party name, or attorney name.",
            "Select the court or county.",
            "View case details, docket entries, and scheduled hearings.",
            "For document copies, contact the Clerk of District Court."
        ],
        links: [
            { name: "Montana Courts - Public Access", url: "https://courts.mt.gov/courts/dcs/records" },
            { name: "Montana Self-Help Law Center", url: "https://courts.mt.gov/selfhelp" }
        ]
    },
    "NE": {
        name: "Nebraska",
        systemName: "JUSTICE (Case Search)",
        description: "Nebraska uses the JUSTICE system (Judicial Users System to Improve Court Efficiency). The Nebraska Judicial Branch provides online case search that allows parties to find their cases and view case information across all Nebraska courts.",
        steps: [
            "Go to the Nebraska Judicial Branch case search (JUSTICE).",
            "Search by case number, party name, or attorney.",
            "Select the county or judicial district.",
            "View case details, docket entries, and hearing schedule.",
            "For document copies, contact the Clerk of the District Court."
        ],
        links: [
            { name: "Nebraska JUSTICE - Case Search", url: "https://www.nebraska.gov/courts/case-search/" },
            { name: "Nebraska Courts Self-Help", url: "https://supremecourt.nebraska.gov/self-help" }
        ]
    },
    "NV": {
        name: "Nevada",
        systemName: "County Court Portals (Odyssey)",
        description: "Nevada case access is managed at the county level. Clark County (Las Vegas) and Washoe County (Reno) have their own online portals. Many counties use the Odyssey system. As a party, you access your case through your county's specific court website.",
        steps: [
            "Identify which county your case is filed in.",
            "Visit that county's District Court or Justice Court website.",
            "Look for 'Case Search,' 'Records,' or 'Odyssey Portal.'",
            "Search by case number or party name.",
            "View case information, docket entries, and hearing schedule."
        ],
        links: [
            { name: "Clark County (Las Vegas) - Case Search", url: "https://www.clarkcountycourts.us/Anonymous/default.aspx" },
            { name: "Washoe County - Case Search", url: "https://www.washoecourts.com/CaseSearch" },
            { name: "Nevada Courts Self-Help", url: "https://selfhelp.nvcourts.gov/" }
        ]
    },

    "NH": {
        name: "New Hampshire",
        systemName: "NH Court Case Look-Up",
        description: "New Hampshire Judicial Branch provides an online case look-up system. Parties can search for their cases and view basic case information, hearing dates, and docket entries for cases in all New Hampshire courts.",
        steps: [
            "Go to the New Hampshire Judicial Branch case look-up page.",
            "Search by case number, party name, or court location.",
            "Select the appropriate court (Superior, Circuit, etc.).",
            "View case details, docket entries, and hearing dates.",
            "For document copies, contact the court clerk's office."
        ],
        links: [
            { name: "NH Courts - Case Look-Up", url: "https://www.courts.nh.gov/resources/case-look" },
            { name: "NH Courts Self-Help", url: "https://www.courts.nh.gov/self-help" }
        ]
    },
    "NJ": {
        name: "New Jersey",
        systemName: "eCourts / NJ Courts Online",
        description: "New Jersey uses the eCourts system for online case access. Parties can search for their civil, family, and special civil part cases. The system provides case status, hearing dates, and docket information. NJ has also implemented the Judiciary Electronic Document Submission (JEDS) system.",
        steps: [
            "Go to the NJ Courts Online portal.",
            "Click on 'Civil Case Information' or 'eCourts.'",
            "Search by case number, party name, or docket number.",
            "Select the county (vicinage) where your case is filed.",
            "View case status, filed documents list, and scheduled hearing dates."
        ],
        links: [
            { name: "NJ Courts - eCourts Public Access", url: "https://portal.njcourts.gov/webe5/ExternalPASearch" },
            { name: "NJ Courts Self-Help", url: "https://www.njcourts.gov/self-help" }
        ]
    },
    "NM": {
        name: "New Mexico",
        systemName: "Odyssey Case Search / NM Courts Case Lookup",
        description: "New Mexico provides a statewide case lookup through the NM Courts website. The system uses Odyssey for case management. Parties can search for their cases across all New Mexico courts and view case information online.",
        steps: [
            "Go to the New Mexico Courts case lookup portal.",
            "Search by case number, party name, or attorney.",
            "Select the court district.",
            "View case details, docket entries, and hearing schedule.",
            "For e-filed documents, register on the NM Odyssey File & Serve system."
        ],
        links: [
            { name: "New Mexico Courts - Case Lookup", url: "https://caselookup.nmcourts.gov/caselookup/" },
            { name: "NM Courts Self-Help", url: "https://www.nmcourts.gov/self-help/" }
        ]
    },
    "NY": {
        name: "New York",
        systemName: "NYSCEF (eFiling) / WebCivil Supreme",
        description: "New York has several systems depending on the court. NYSCEF (New York State Courts Electronic Filing) is the primary system for Supreme Court cases. WebCivil Supreme provides case information for civil cases. For NYC, there is also the eCourts system. Parties can view documents filed in their case through NYSCEF.",
        steps: [
            "Determine which court your case is in (Supreme, Civil, Family, etc.).",
            "For Supreme Court civil cases, go to NYSCEF.",
            "Search by index number (case number) or party name.",
            "View all e-filed documents, motions, and court orders directly online.",
            "For non-Supreme Court cases, use WebCivil Local or eCourts."
        ],
        links: [
            { name: "NYSCEF - NY State Courts E-Filing", url: "https://iapps.courts.state.ny.us/nyscef/Login" },
            { name: "WebCivil Supreme - Case Search", url: "https://iapps.courts.state.ny.us/webcivil/FCASMain" },
            { name: "NY Courts - CourtHelp", url: "https://www.nycourts.gov/courthelp/" }
        ]
    },

    "NC": {
        name: "North Carolina",
        systemName: "eCourts Services Portal",
        description: "North Carolina has been transitioning to a new statewide eCourts system built on the Odyssey platform. The eCourts portal allows parties to search for cases and view documents electronically. Some counties are still transitioning, but the system is expanding statewide.",
        steps: [
            "Go to the NC eCourts Services Portal.",
            "Create a free account or search as a guest.",
            "Search by case number, party name, or attorney.",
            "View case details, docket entries, filed documents, and hearing schedule.",
            "If your county hasn't transitioned yet, contact the Clerk of Superior Court."
        ],
        links: [
            { name: "NC eCourts - Case Search", url: "https://www.nccourts.gov/services/ecourts-services-portal" },
            { name: "NC Courts - Help for Self-Represented", url: "https://www.nccourts.gov/help" }
        ]
    },
    "ND": {
        name: "North Dakota",
        systemName: "North Dakota Courts Public Search",
        description: "North Dakota provides a statewide public case search through the ND Courts website. Parties can search all district courts and view case information, docket entries, and hearing dates.",
        steps: [
            "Go to the North Dakota Courts public case search.",
            "Search by case number, party name, or attorney.",
            "Select the judicial district or county.",
            "View case details, all docket entries, and upcoming hearings.",
            "For document copies, contact the Clerk of District Court."
        ],
        links: [
            { name: "ND Courts - Public Case Search", url: "https://publicsearch.ndcourts.gov/" },
            { name: "ND Courts Legal Self-Help", url: "https://www.ndcourts.gov/legal-self-help" }
        ]
    },
    "OH": {
        name: "Ohio",
        systemName: "County Clerk of Courts Portals",
        description: "Ohio case access is managed by each county's Clerk of Courts. There is no single statewide portal. Each county has its own system. Most Ohio counties provide free online case search through their Clerk of Courts website.",
        steps: [
            "Identify which county your case is filed in.",
            "Visit that county's Clerk of Courts website.",
            "Look for 'Case Search,' 'Docket Search,' or 'Online Records.'",
            "Search by case number or party name.",
            "View docket entries, filed documents, hearing dates, and case status."
        ],
        links: [
            { name: "Cuyahoga County (Cleveland) - Case Search", url: "https://cpdocket.cp.cuyahogacounty.us/" },
            { name: "Franklin County (Columbus) - Case Search", url: "https://fcdcfcjs.co.franklin.oh.us/CaseInformationOnline/" },
            { name: "Hamilton County (Cincinnati) - Case Search", url: "https://www.courtclerk.org/records-search/" },
            { name: "Ohio Legal Help", url: "https://www.ohiolegalhelp.org/" }
        ]
    },
    "OK": {
        name: "Oklahoma",
        systemName: "OSCN / ODCR (On Demand Court Records)",
        description: "Oklahoma has two systems: OSCN (Oklahoma State Courts Network) and ODCR (On Demand Court Records). OSCN covers most counties with free access. ODCR covers remaining counties. Both allow parties to search for their cases and view docket information.",
        steps: [
            "Go to OSCN.net or ODCR.com depending on your county.",
            "Search by case number, party name, or date filed.",
            "Select your county from the list.",
            "View case details, all docket entries, minutes, and filed documents.",
            "Many documents are viewable directly as scanned images on OSCN."
        ],
        links: [
            { name: "OSCN - Oklahoma Case Search", url: "https://www.oscn.net/dockets/" },
            { name: "ODCR - On Demand Court Records", url: "https://www.odcr.com/" },
            { name: "Oklahoma Law Help", url: "https://oklaw.org/" }
        ]
    },

    "OR": {
        name: "Oregon",
        systemName: "Oregon eCourt (OECI) / Oregon Judicial Case Information Network",
        description: "Oregon uses Oregon eCourt Case Information (OECI). Parties can create an account to access their case information online. The system provides access to case documents, hearing schedules, and docket information for all Oregon circuit courts.",
        steps: [
            "Go to the Oregon Judicial Department's OECI portal.",
            "Create a free account (registration required for full access).",
            "Search by case number or party name.",
            "View case details, filed documents, hearing calendar, and judgments.",
            "Download or print documents directly from the portal."
        ],
        links: [
            { name: "Oregon eCourt Case Information (OECI)", url: "https://webportal.courts.oregon.gov/portal" },
            { name: "Oregon Courts Self-Help", url: "https://www.courts.oregon.gov/self-help/Pages/default.aspx" }
        ]
    },
    "PA": {
        name: "Pennsylvania",
        systemName: "UJS Web Portal / PAcFile",
        description: "Pennsylvania's Unified Judicial System (UJS) provides a web portal for public case search. The system covers courts of common pleas, magisterial district courts, and appellate courts. Parties can search statewide and also use PAcFile for electronic filing and case access.",
        steps: [
            "Go to the Pennsylvania UJS Web Portal.",
            "Select 'Court Case Information' or use the search function.",
            "Choose the court type (Common Pleas, MDJ, Appellate).",
            "Search by case number, party name, or docket number.",
            "View case details, docket entries, calendar events, and filed documents."
        ],
        links: [
            { name: "PA UJS Web Portal - Case Search", url: "https://ujsportal.pacourts.us/" },
            { name: "PAcFile - PA Courts E-Filing", url: "https://pacfile.pacourts.us/" },
            { name: "PA Courts Self-Help", url: "https://www.pacourts.us/learn" }
        ]
    },
    "RI": {
        name: "Rhode Island",
        systemName: "RI Courts Public Portal",
        description: "Rhode Island provides a public access portal for case searches. Parties can look up their cases in Superior Court, District Court, and Family Court. The system provides case status, docket entries, and hearing information.",
        steps: [
            "Go to the Rhode Island Judiciary public portal.",
            "Select the court (Superior, District, or Family).",
            "Search by case number or party name.",
            "View case details, docket entries, and hearing dates.",
            "For document copies, contact the Clerk's office of the appropriate court."
        ],
        links: [
            { name: "RI Courts - Public Portal", url: "https://www.courts.ri.gov/PublicResources/Pages/Records.aspx" },
            { name: "RI Courts Self-Help", url: "https://www.courts.ri.gov/PublicResources/Pages/Self-Help.aspx" }
        ]
    },
    "SC": {
        name: "South Carolina",
        systemName: "SC Courts Public Index",
        description: "South Carolina provides a public index for case searches through the SC Judicial Branch website. Parties can search for cases in Circuit Court, Family Court, and Common Pleas. The system provides docket information and case status.",
        steps: [
            "Go to the South Carolina Judicial Branch public index.",
            "Search by case number, party name, or attorney.",
            "Select the county where your case is filed.",
            "View case details, docket entries, and hearing dates.",
            "For document copies, contact the Clerk of Court in your county."
        ],
        links: [
            { name: "SC Courts - Public Index", url: "https://www.sccourts.org/caseSearch/" },
            { name: "SC Courts - Self-Help", url: "https://www.sccourts.org/selfHelp/" }
        ]
    },

    "SD": {
        name: "South Dakota",
        systemName: "South Dakota UJS Case Search (Odyssey)",
        description: "South Dakota's Unified Judicial System provides an online case search through the Odyssey portal. Parties can search for their cases statewide and view docket information, hearing dates, and case status.",
        steps: [
            "Go to the South Dakota UJS case search portal.",
            "Search by case number, party name, or attorney.",
            "Select the county or circuit.",
            "View case details, docket entries, and hearing dates.",
            "For copies of specific documents, contact the Clerk of Courts."
        ],
        links: [
            { name: "SD UJS - Odyssey Case Search", url: "https://ujspublic.sd.gov/CaseSearch.aspx" },
            { name: "SD Courts Self-Help", url: "https://ujs.sd.gov/Self_Help/" }
        ]
    },
    "TN": {
        name: "Tennessee",
        systemName: "County Clerk Portals / TNCourts.gov",
        description: "Tennessee case access varies by county. Many Tennessee counties use the CaseLink or Odyssey systems. The Tennessee Courts website can direct you to the correct county clerk's system for your area.",
        steps: [
            "Identify which county your case is in.",
            "Visit the Tennessee Courts website or your county Circuit Court Clerk's website.",
            "Look for 'Case Search,' 'Records,' or 'CaseLink.'",
            "Search by case number or party name.",
            "View case docket, hearing schedule, and case status."
        ],
        links: [
            { name: "Tennessee Courts - Case Information", url: "https://www.tncourts.gov/programs/case-management" },
            { name: "Davidson County (Nashville) - Case Search", url: "https://sci.ccc.nashville.gov/" },
            { name: "Tennessee Self-Help Center", url: "https://www.tncourts.gov/programs/self-help-center" }
        ]
    },
    "TX": {
        name: "Texas",
        systemName: "County District Clerk Portals / Re:SearchTX",
        description: "Texas case access is primarily managed at the county level through each District Clerk's office. Texas also has Re:SearchTX, a statewide records portal covering some counties. Major counties like Harris (Houston) and Dallas have their own robust online systems.",
        steps: [
            "Identify which county your case is filed in.",
            "Visit that county's District Clerk website.",
            "Look for 'Case Search,' 'Records Search,' or 'Online Services.'",
            "Search by case number, party name, or cause number.",
            "View case details, all filings, and hearing dates."
        ],
        links: [
            { name: "Re:SearchTX - Statewide Records", url: "https://research.txcourts.gov/CourtRecordsSearch" },
            { name: "Harris County (Houston) - Case Search", url: "https://www.hcdistrictclerk.com/edocs/public/search.aspx" },
            { name: "Dallas County - Records Search", url: "https://www.dallascounty.org/department/distclerk/disclaimer.php" },
            { name: "Texas Law Help", url: "https://texaslawhelp.org/" }
        ]
    },
    "UT": {
        name: "Utah",
        systemName: "XChange (Utah Courts Case Search)",
        description: "Utah provides XChange, a public case search system through the Utah State Courts. Parties can search for their cases and view case information. For more detailed document access, parties can register for the court's e-filing system.",
        steps: [
            "Go to the Utah Courts XChange case search.",
            "Search by case number, party name, or attorney.",
            "Select the court or district.",
            "View case details, docket entries, and hearing schedule.",
            "For document access, register on the Utah Courts e-filing system (OCAP)."
        ],
        links: [
            { name: "Utah XChange - Case Search", url: "https://www.utcourts.gov/cal/" },
            { name: "Utah Courts Self-Help", url: "https://www.utcourts.gov/selfhelp/" }
        ]
    },

    "VT": {
        name: "Vermont",
        systemName: "Vermont Judiciary Online Case Access",
        description: "Vermont Judiciary provides online case access through their website. Parties can search for case information in all Vermont courts. The system provides docket entries, hearing dates, and case status.",
        steps: [
            "Go to the Vermont Judiciary website.",
            "Navigate to 'Online Case Access' or 'Case Records.'",
            "Search by case number, party name, or docket number.",
            "Select the court unit (Superior Court - Civil, Criminal, Family, etc.).",
            "View case details, docket entries, and hearing schedule."
        ],
        links: [
            { name: "Vermont Judiciary - Case Records", url: "https://www.vermontjudiciary.org/court-records" },
            { name: "Vermont Courts Self-Help", url: "https://www.vermontjudiciary.org/self-help" }
        ]
    },
    "VA": {
        name: "Virginia",
        systemName: "Virginia Courts Case Information System",
        description: "Virginia provides an online case information system through the Virginia Judicial System website. Parties can search for their cases across all Virginia General District Courts, Circuit Courts, and Juvenile and Domestic Relations courts.",
        steps: [
            "Go to the Virginia Courts Case Information website.",
            "Select the court type (Circuit, General District, or JDR).",
            "Select the county or city where your case is filed.",
            "Search by case number, party name, or hearing date.",
            "View case details, docket entries, hearing dates, and case outcome."
        ],
        links: [
            { name: "Virginia Courts - Case Information", url: "https://www.vacourts.gov/caseinfo/home.html" },
            { name: "Virginia Courts - Online Case Access", url: "https://eapps.courts.state.va.us/cjisWeb/circuit.jsp" },
            { name: "Virginia Self-Help", url: "https://selfhelp.vacourts.gov/" }
        ]
    },
    "WA": {
        name: "Washington",
        systemName: "Odyssey Portal / County Clerk Portals",
        description: "Washington state courts use multiple systems. Many counties use the Odyssey portal for case access. King County (Seattle) has its own eCourt system. The Washington Courts website can help you find the right portal for your county.",
        steps: [
            "Identify which county your case is filed in.",
            "Visit that county's Superior Court or District Court website.",
            "Look for 'Case Search,' 'Odyssey Portal,' or 'Court Records.'",
            "Search by case number or party name.",
            "View case details, filed documents, and hearing schedule."
        ],
        links: [
            { name: "King County (Seattle) - eCourt Case Search", url: "https://dja-prd-ecourt.powerappsportals.us/casenumbersearch/" },
            { name: "Washington Courts - Find Your Court", url: "https://www.courts.wa.gov/court_dir/" },
            { name: "Washington LawHelp", url: "https://www.washingtonlawhelp.org/" }
        ]
    },
    "WV": {
        name: "West Virginia",
        systemName: "West Virginia Judiciary Case Search",
        description: "West Virginia provides a statewide case search through the WV Judiciary website. Parties can search for cases in all Magistrate Courts and Circuit Courts. The system provides basic case information and docket entries.",
        steps: [
            "Go to the West Virginia Judiciary case search page.",
            "Choose Magistrate Court or Circuit Court search.",
            "Search by case number, party name, or county.",
            "View case details, docket entries, and hearing dates.",
            "For full document access, contact the Circuit Clerk's office."
        ],
        links: [
            { name: "WV Judiciary - Case Search", url: "https://www.courtswv.gov/public-resources/case-activity.html" },
            { name: "WV Courts Self-Help", url: "https://www.courtswv.gov/public-resources/self-help.html" }
        ]
    },

    "WI": {
        name: "Wisconsin",
        systemName: "WCCA (Wisconsin Circuit Court Access)",
        description: "Wisconsin provides WCCA (Wisconsin Circuit Court Access), a free statewide system that allows anyone to search for cases in all Wisconsin circuit courts. As a party, you can find your case and view all docket entries, filed documents, and hearing information.",
        steps: [
            "Go to the WCCA (Wisconsin Circuit Court Access) website.",
            "Search by case number, party name, or other criteria.",
            "Select the county where your case is filed.",
            "View complete case details, all docket entries, charges, and hearing dates.",
            "Many counties also provide document images directly through WCCA."
        ],
        links: [
            { name: "WCCA - Wisconsin Case Search", url: "https://wcca.wicourts.gov/" },
            { name: "Wisconsin Courts Self-Help", url: "https://www.wicourts.gov/services/public/selfhelp/index.htm" }
        ]
    },
    "WY": {
        name: "Wyoming",
        systemName: "Wyoming Court Case Search",
        description: "Wyoming provides an online case search system through the Wyoming Judicial Branch website. Parties can search for cases across all Wyoming district courts and view case information and docket entries.",
        steps: [
            "Go to the Wyoming Courts case search portal.",
            "Search by case number, party name, or attorney.",
            "Select the judicial district or county.",
            "View case details, docket entries, and hearing schedule.",
            "For copies of specific documents, contact the Clerk of District Court."
        ],
        links: [
            { name: "Wyoming Courts - Case Search", url: "https://www.courts.state.wy.us/Case_Search" },
            { name: "Wyoming Self-Help Center", url: "https://www.courts.state.wy.us/self-help-center/" }
        ]
    },
    "DC": {
        name: "District of Columbia",
        systemName: "DC Courts Case Search / eFiling",
        description: "The District of Columbia Courts provide an online case search and e-filing system. Parties can search for their cases in Superior Court and view documents, hearing schedules, and docket information. The CaseFileXpress e-filing system provides document access for registered users.",
        steps: [
            "Go to the DC Courts case search page.",
            "Search by case number, party name, or attorney.",
            "View case details, docket entries, and hearing schedule.",
            "For full document access, register on CaseFileXpress (e-filing system).",
            "View and download filed documents from your case."
        ],
        links: [
            { name: "DC Courts - Case Search", url: "https://www.dccourts.gov/services/online-services/case-search" },
            { name: "DC Courts - eFiling (CaseFileXpress)", url: "https://www.dccourts.gov/services/online-services/e-filing" },
            { name: "DC Courts Self-Help Center", url: "https://www.dccourts.gov/services/self-help-center" }
        ]
    }
};
