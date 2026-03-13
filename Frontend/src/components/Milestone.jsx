// import React from "react";

// const data = {
//   project_analysis: {
//     project_type: "Web Application Checkout Flow",
//     complexity: "Medium",
//     estimated_total_days: 30,
//   },
//   milestones: [
//     {
//       id: 1,
//       objective: "Requirements & Technical Specification",
//       description: "Gather detailed checkout flow requirements...",
//       estimated_days: 3,
//       amount_percentage: 5,
//       status: "Evidence Submitted", // Adding a status for the UI
//     },
//     {
//       id: 2,
//       objective: "UI/UX Design & Responsive Layout",
//       description: "Create wireframes and high-fidelity mockups...",
//       estimated_days: 5,
//       amount_percentage: 10,
//       status: "In Progress",
//     },
//     // ... other milestones from your JSON
//   ],
// };

// function Milestone() {
//   const { project_analysis, milestones } = data;

//   return (
//     <div style={styles.container}>
//       {/* 1. Main Project Card */}
//       <div style={styles.projectCard}>
//         <div style={styles.headerRow}>
//           <span style={styles.projectId}>#PROJ-2026-WEB</span>
//           <span style={styles.badge}>Active Project</span>
//           <div style={styles.downloadLink}>
//              <span style={{marginRight: '5px'}}>⬇</span> Download PDF
//           </div>
//         </div>

//         <h1 style={styles.projectTitle}>{project_analysis.project_type}</h1>

//         <div style={styles.metaRow}>
//           <div style={styles.metaItem}>
//             <span style={styles.icon}>🛡️</span> 
//             Complexity: <strong>{project_analysis.complexity}</strong>
//           </div>
//           <div style={styles.metaItem}>
//             <span style={styles.icon}>📅</span> 
//             Duration: <strong>{project_analysis.estimated_total_days} Days</strong>
//           </div>
//           <div style={styles.totalValue}>
//             Total Milestones: {milestones.length}
//           </div>
//         </div>
//       </div>

//       {/* 2. Milestones Section */}
//       <h2 style={styles.sectionTitle}>Project Milestones</h2>

//       {milestones.map((m) => (
//         <div key={m.id} style={styles.milestoneCard}>
//           <div style={styles.milestoneContent}>
//             <div style={styles.milestoneNumber}>{m.id}</div>
            
//             <div style={styles.milestoneText}>
//               <h3 style={styles.milestoneObjective}>{m.objective}</h3>
//               <p style={styles.milestoneSubtext}>
//                 {m.estimated_days} Days • {m.amount_percentage}% Payment Weight
//               </p>
//             </div>

//             <div style={styles.statusContainer}>
//               <span style={styles.statusBadge}>
//                 {m.id === 1 ? "Evidence Submitted" : "Pending"}
//               </span>
//               <span style={styles.chevron}>∨</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// // --- Styles Object ---
// const styles = {
//   container: {
//     padding: "40px",
//     backgroundColor: "#f8f9fa",
//     minHeight: "100vh",
//     fontFamily: "'Inter', -apple-system, sans-serif",
//     color: "#1a1a1a",
//   },
//   projectCard: {
//     backgroundColor: "#fff",
//     borderRadius: "12px",
//     padding: "24px",
//     boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
//     border: "1px solid #eee",
//     marginBottom: "30px",
//   },
//   headerRow: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "15px",
//   },
//   projectId: {
//     fontSize: "12px",
//     color: "#888",
//     marginRight: "10px",
//   },
//   badge: {
//     backgroundColor: "#e6fcf5",
//     color: "#0ca678",
//     padding: "4px 12px",
//     borderRadius: "20px",
//     fontSize: "12px",
//     fontWeight: "600",
//   },
//   downloadLink: {
//     marginLeft: "auto",
//     color: "#4c6ef5",
//     fontSize: "14px",
//     fontWeight: "500",
//     cursor: "pointer",
//   },
//   projectTitle: {
//     fontSize: "24px",
//     margin: "0 0 15px 0",
//     color: "#212529",
//   },
//   metaRow: {
//     display: "flex",
//     gap: "25px",
//     fontSize: "14px",
//     color: "#495057",
//   },
//   metaItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//   },
//   totalValue: {
//     marginLeft: "auto",
//     fontWeight: "700",
//     fontSize: "16px",
//   },
//   sectionTitle: {
//     fontSize: "18px",
//     marginBottom: "20px",
//     color: "#212529",
//   },
//   milestoneCard: {
//     backgroundColor: "#fff",
//     borderRadius: "12px",
//     padding: "16px 24px",
//     border: "1px solid #eee",
//     marginBottom: "12px",
//     boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
//   },
//   milestoneContent: {
//     display: "flex",
//     alignItems: "center",
//   },
//   milestoneNumber: {
//     width: "36px",
//     height: "36px",
//     backgroundColor: "#fff4e6",
//     color: "#fd7e14",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontWeight: "bold",
//     marginRight: "15px",
//   },
//   milestoneText: {
//     flex: 1,
//   },
//   milestoneObjective: {
//     margin: 0,
//     fontSize: "16px",
//     color: "#212529",
//   },
//   milestoneSubtext: {
//     margin: "4px 0 0 0",
//     fontSize: "13px",
//     color: "#868e96",
//   },
//   statusContainer: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//   },
//   statusBadge: {
//     color: "#f59f00",
//     backgroundColor: "#fff9db",
//     padding: "6px 12px",
//     borderRadius: "8px",
//     fontSize: "12px",
//     fontWeight: "500",
//     border: "1px solid #ffe066",
//   },
//   chevron: {
//     color: "#adb5bd",
//     fontSize: "12px",
//   }
// };

// export default Milestone;


import React from 'react'
const data = 
{
  "project_analysis": {
    "project_type": "web_application",
    "complexity": "medium",
    "estimated_total_days": 30
  },
  "milestones": [
    {
      "id": 1,
      "objective": "Requirements & Technical Specification",
      "description": "Gather detailed checkout flow requirements, define user stories, and produce a technical specification covering architecture, data flow, and integration points.",
      "deliverables": [
        "Requirements Document PDF",
        "Technical Specification Document PDF",
        "Signed Acceptance Criteria List"
      ],
      "acceptance_criteria": [
        "Client signs off on the Requirements Document",
        "All checkout steps (cart review, address entry, payment, confirmation) are listed",
        "Technical spec includes React version, Razorpay API version, and responsive breakpoints"
      ],
      "estimated_days": 3,
      "amount_percentage": 5
    },
    {
      "id": 2,
      "objective": "UI/UX Design & Responsive Layout",
      "description": "Create wireframes and high\u2011fidelity mockups for the checkout flow, define a responsive design system, and obtain client approval.",
      "deliverables": [
        "Figma Wireframes Link",
        "Figma High\u2011Fidelity Mockups Link",
        "Responsive Design Style Guide (PDF)"
      ],
      "acceptance_criteria": [
        "Designs approved for desktop (1440px), tablet (768px), and mobile (375px) breakpoints",
        "All UI elements match brand guidelines",
        "Client provides written sign\u2011off on mockups"
      ],
      "estimated_days": 5,
      "amount_percentage": 10
    },
    {
      "id": 3,
      "objective": "Frontend Development \u2013 Checkout UI",
      "description": "Implement the approved designs using React, create reusable components, add form validation, and ensure responsive behavior.",
      "deliverables": [
        "GitHub Repository URL with source code",
        "React component library (src/components/checkout)",
        "Unit Test Coverage Report (>=80%)",
        "Build Artifact (zip of production build)"
      ],
      "acceptance_criteria": [
        "All UI components render correctly on desktop, tablet, and mobile",
        "Form validation passes all edge cases (required fields, email format, etc.)",
        "Linting passes with no errors and unit tests achieve >=80% coverage",
        "Client reviews and approves the functional UI"
      ],
      "estimated_days": 10,
      "amount_percentage": 35
    },
    {
      "id": 4,
      "objective": "Razorpay Payment Gateway Integration",
      "description": "Integrate Razorpay SDK for payment processing, handle order creation, capture payments, and set up webhook endpoint for transaction verification.",
      "deliverables": [
        "Integrated Razorpay payment module (React component)",
        "Sandbox payment transaction screenshots",
        "Webhook endpoint URL and sample payload logs",
        "Updated README with payment configuration steps"
      ],
      "acceptance_criteria": [
        "Successful sandbox payment completes and returns a confirmed status",
        "Webhook receives and logs the correct payload within 2 seconds",
        "Error handling displays user\u2011friendly messages for declined payments",
        "Client signs off after testing a minimum of 3 sandbox transactions"
      ],
      "estimated_days": 5,
      "amount_percentage": 20
    },
    {
      "id": 5,
      "objective": "Testing, QA & Bug Fixes",
      "description": "Perform functional, integration, and responsive testing across browsers, log and resolve defects, and prepare a test report.",
      "deliverables": [
        "Comprehensive Test Report PDF (test cases, results)",
        "Bug Tracker Export (CSV) with status 'Resolved'",
        "User Acceptance Testing (UAT) Sign\u2011off Document"
      ],
      "acceptance_criteria": [
        "All test cases pass (>=95% pass rate)",
        "No critical or high\u2011severity bugs remain open",
        "UAT sign\u2011off received from client",
        "Cross\u2011browser testing confirms functionality on Chrome, Firefox, Safari, Edge"
      ],
      "estimated_days": 5,
      "amount_percentage": 15
    },
    {
      "id": 6,
      "objective": "Deployment & Documentation",
      "description": "Deploy the checkout flow to a staging/production environment, provide deployment instructions, and hand over all project assets.",
      "deliverables": [
        "Live URL (e.g., Vercel or Netlify) of the deployed checkout flow",
        "Deployment Guide Document (PDF)",
        "Final Project Handover Package (source code, design files, docs) zip"
      ],
      "acceptance_criteria": [
        "Live URL is accessible over HTTPS and passes a health check",
        "Deployment Guide allows a third\u2011party to redeploy without assistance",
        "Client provides final sign\u2011off confirming all deliverables are received"
      ],
      "estimated_days": 2,
      "amount_percentage": 15
    }
  ]
};

function Milestone() {
  return (
    <>
      <div>
        <h1>Project Type: {data.project_analysis.project_type}</h1>
        <p>Complexity: {data.project_analysis.complexity}</p>
        <p>Estimated Total Days: {data.project_analysis.estimated_total_days}</p>
      </div>
      <h2>Milestones:</h2>
      <ul>
        {data.milestones.map((milestone) => (
          <div className="milestone-card" key={milestone.id} style={{border: '1px solid #ccc', padding: '10px', marginBottom: '10px'}}>
            <li key={milestone.id}>
              <h3>{milestone.objective}</h3>
              <p>{milestone.description}</p>
              <p>Estimated Days: {milestone.estimated_days}</p>
              <p>Amount Percentage: {milestone.amount_percentage}%</p>
              <h4>Deliverables:</h4>
              <ul>
                {milestone.deliverables.map((deliverable, index) => (
                  <li key={index}>{deliverable}</li>
                ))}
              </ul>
              <h4>Acceptance Criteria:</h4>
              <ul>
                {milestone.acceptance_criteria.map((criteria, index) => (
                  <li key={index}>{criteria}</li>
                ))}
              </ul>
            </li>
          </div>
        ))}
      </ul>

    </>
  )
}

export default Milestone
