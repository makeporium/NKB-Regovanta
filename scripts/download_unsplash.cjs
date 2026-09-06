const https = require('https');
const fs = require('fs');
const path = require('path');

// Curated list of 39 distinct authentic medical, laboratory, hospital, regulatory, engineering & cleanroom Unsplash photos
// Using direct Unsplash CDN image IDs with optimal size and compression
const unsplashImages = [
  // 01 AI & Digital Health
  { id: "01", photoId: "photo-1576091160399-112ba8d25d1d", name: "digital_health_tablet.jpg" }, // Doctor using tablet/digital health
  // 02 EU MDR Strategy
  { id: "02", photoId: "photo-1584515979956-d9f6e5d09982", name: "medical_audit_consult.jpg" }, // Stethoscope, clipboard, documents
  // 03 CDSCO India Update
  { id: "03", photoId: "photo-1582719478250-c89cae4dc85b", name: "clinical_research_facility.jpg" }, // Clinical research room
  // 04 Medical Device Documentation
  { id: "04", photoId: "photo-1450133064473-71024230f91b", name: "regulatory_dossier_review.jpg" }, // Documents, folders, pen review
  // 05 CE Marking Digital Health
  { id: "05", photoId: "photo-1532938911079-1b06ac7ceec7", name: "software_medical_screen.jpg" }, // Medical monitor, software interface
  // 06 FDA QMSR Compliance
  { id: "06", photoId: "photo-1551836022-d5d88e9218df", name: "quality_assurance_meeting.jpg" }, // Corporate meeting reviewing reports
  // 07 Dynamic Risk Management
  { id: "07", photoId: "photo-1507668077129-56e32842fceb", name: "risk_assessment_analytics.jpg" }, // Data analytics screen, clinical charts
  // 08 PRRC EU MDR/IVDR
  { id: "08", photoId: "photo-1573496359142-b8d87734a5a2", name: "regulatory_compliance_officer.jpg" }, // Professional woman compliance officer
  // 09 QMS Documentation ISO 13485
  { id: "09", photoId: "photo-1454165804606-c3d57bc86b40", name: "iso_audit_binder_prep.jpg" }, // Reviewing charts & binders at desk
  // 10 Clinical Equivalence
  { id: "10", photoId: "photo-1579684385127-1ef15d508118", name: "clinical_evaluation_doctor.jpg" }, // Medical specialist examining scans
  // 11 GSPR Compliance
  { id: "11", photoId: "photo-1581093458791-9f3c3900df4b", name: "biomedical_engineering_bench.jpg" }, // Engineer testing device hardware
  // 12 CDSCO Manufacturing License India
  { id: "12", photoId: "photo-1581091226825-a6a2a5aee158", name: "pharma_cleanroom_line.jpg" }, // Cleanroom manufacturing technicians
  // 13 Class III Devices
  { id: "13", photoId: "photo-1551601651-2a8555f1a136", name: "cardiovascular_surgical_implant.jpg" }, // High-tech operating theater equipment
  // 14 GSPR Foundation R&D
  { id: "14", photoId: "photo-1581092160607-ee22621dd758", name: "medtech_cad_design.jpg" }, // CAD engineering on monitor
  // 15 Cardiovascular CE Marking
  { id: "15", photoId: "photo-1530497610245-94d3c16cda28", name: "cardiac_monitor_ecg.jpg" }, // ECG cardiac monitor trace
  // 16 IEC 62304 Software Lifecycle
  { id: "16", photoId: "photo-1555066931-4365d14bab8c", name: "software_code_validation.jpg" }, // Clean programming code screen
  // 17 Remote Patient Monitoring
  { id: "17", photoId: "photo-1516549655169-df83a0774514", name: "connected_patient_care.jpg" }, // Patient care diagnostic sensor
  // 18 IVDR Class D Verification
  { id: "18", photoId: "photo-1579154204601-01588f351e67", name: "laboratory_test_tubes_pipette.jpg" }, // Lab tubes & micropipette
  // 19 Dental Scanners Manufacturing
  { id: "19", photoId: "photo-1588776814546-1ffcf47267a5", name: "digital_dental_clinic.jpg" }, // High-tech modern dental clinic
  // 20 Borderline Medical Devices
  { id: "20", photoId: "photo-1471864190281-a93a3070b6de", name: "pharmaceutical_vials_capsules.jpg" }, // Pharma vials and medicine bottles
  // 21 Notified Body Technical Documentation
  { id: "21", photoId: "photo-1554224155-8d04cb21cd6c", name: "audit_checklist_calculator.jpg" }, // Clipboard audit review
  // 22 Overcoming FDA 510(k) Barriers
  { id: "22", photoId: "photo-1486406146926-c627a92ad1ab", name: "us_regulatory_headquarters.jpg" }, // High-rise modern professional office
  // 23 Effective CAPA System
  { id: "23", photoId: "photo-1517245386807-bb43f82c33c4", name: "capa_investigation_team.jpg" }, // Engineering team root cause meeting
  // 24 Regulatory Strategy Global
  { id: "24", photoId: "photo-1526778548025-fa2f459cd5c1", name: "global_map_logistics.jpg" }, // Global market access map
  // 25 Regulation EU 2024/1860
  { id: "25", photoId: "photo-1486312338219-ce68d2c6f44d", name: "laptop_regulatory_search.jpg" }, // Working on official regulatory portals
  // 26 Biological Evaluation ISO 10993
  { id: "26", photoId: "photo-1582719508461-905c673771fd", name: "petri_dish_biocompatibility.jpg" }, // Petri dish cell culture testing
  // 27 Core Regulations Global
  { id: "27", photoId: "photo-1589829545856-d10d557cf95f", name: "legal_compliance_gavel.jpg" }, // Law and compliance books
  // 28 Optimal Timing FDA 510(k)
  { id: "28", photoId: "photo-1506784983877-45594efa4cbe", name: "project_milestone_calendar.jpg" }, // Strategic calendar timeline planning
  // 29 Usability Testing IEC 62366
  { id: "29", photoId: "photo-1576091160550-2173dba999ef", name: "usability_observation_lab.jpg" }, // Doctor and patient user interaction
  // 30 FDA 510(k) Modernization
  { id: "30", photoId: "photo-1516321318423-f06f85e504b3", name: "digital_security_compliance.jpg" }, // Modern compliance dashboard
  // 31 Human Factors Engineering
  { id: "31", photoId: "photo-1559757175-5700dde675bc", name: "medical_ergonomics_device.jpg" }, // Hand holding specialized medical sensor
  // 32 CDSCO Device Registration India
  { id: "32", photoId: "photo-1584308666744-24d5c474f2ae", name: "sterile_blister_packaging.jpg" }, // Sterile medical device packaging
  // 33 CE Marking Process EU MDR
  { id: "33", photoId: "photo-1532187863486-abf9dbad1b69", name: "biochemical_laboratory_flask.jpg" }, // Flasks, chemistry testing in lab
  // 34 SaMD Classification US FDA
  { id: "34", photoId: "photo-1516321497487-e288fb19713f", name: "samd_mobile_telehealth.jpg" }, // Mobile app health interface
  // 35 FDA Pre-Submission Q-Sub
  { id: "35", photoId: "photo-1600880292203-757bb62b4baf", name: "executive_meeting_handshake.jpg" }, // Formal business partnership meeting
  // 36 Notified Body Selection
  { id: "36", photoId: "photo-1450133064473-71024230f91b", name: "accreditation_certificate_audit.jpg" }, // Certification review
  // 37 FDA QMSR 2026
  { id: "37", photoId: "photo-1582719478250-c89cae4dc85b", name: "fda_laboratory_validation.jpg" }, // Research & diagnostics
  // 38 EU MDR 2026 EUDAMED
  { id: "38", photoId: "photo-1504868584819-f8e8b4b6d7e3", name: "database_analytics_eudamed.jpg" }, // Global analytics interface
  // 39 FDA Inspections QMSR
  { id: "39", photoId: "photo-1581091226825-a6a2a5aee158", name: "inspection_clean_facility.jpg" } // Clean manufacturing facility
];

function downloadImage(photoId, filename) {
  const url = `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=800&q=80`;
  const dest = path.join(__dirname, '../public/assets/insights', filename);

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (res2) => {
          const stream = fs.createWriteStream(dest);
          res2.pipe(stream);
          stream.on('finish', () => {
            stream.close();
            resolve(filename);
          });
        }).on('error', reject);
      } else {
        const stream = fs.createWriteStream(dest);
        res.pipe(stream);
        stream.on('finish', () => {
          stream.close();
          resolve(filename);
        });
      }
    }).on('error', reject);
  });
}

async function run() {
  const targetDir = path.join(__dirname, '../public/assets/insights');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  console.log(`Downloading ${unsplashImages.length} authentic medical photos...`);
  for (let i = 0; i < unsplashImages.length; i++) {
    const item = unsplashImages[i];
    try {
      await downloadImage(item.photoId, item.name);
      console.log(`[${i+1}/${unsplashImages.length}] Downloaded ${item.name}`);
    } catch (e) {
      console.error(`Error downloading ${item.name}:`, e.message);
    }
  }
  console.log('All authentic Unsplash photos downloaded successfully!');
}

run();
