# Health Companion App - User Flow Chart

```mermaid
flowchart LR
    Start([User Opens App])
    AuthCheck{Logged In?}
    Login["Login/Sign Up"]
    Homepage["Homepage<br/>Dashboard, Alerts<br/>Quick Actions"]
    
    Dashboard["Dashboard<br/>Health Summary"]
    Medications["Medications<br/>Current List"]
    Appointments["Appointments<br/>Upcoming/Past"]
    Reminders["Reminders<br/>Daily Timeline"]
    Settings["Settings<br/>Profile & Preferences"]
    
    MedAction{Med Action?}
    MarkTaken["Mark as Taken<br/>Log medication"]
    AddMed["Add New Medication"]
    CheckRefills["Check Refills<br/>Alert notifications"]
    
    ViewHealth["View Health Data<br/>BP, HR, Family Info"]
    
    ApptAction{Appt Action?}
    ViewDetails["View Details<br/>Time, Location, Dr"]
    ScheduleNew["Schedule New<br/>Select date/time"]
    GetDirections["Get Directions<br/>Navigate to clinic"]
    
    MarkReminder["Mark Reminder<br/>Complete task"]
    
    SettingsAction{Settings Action?}
    EditProfile["Edit Profile<br/>Update info"]
    Notifications["Notifications<br/>Customize alerts"]
    FamilySharing["Family Sharing<br/>Manage contacts"]
    
    TaskComplete["✓ Task Complete"]
    NextAction{Next Action?}
    
    Continue["Continue<br/>Navigate Features"]
    ReturnHome["Return Home"]
    Logout["Logout"]
    Exit([Exit App])
    
    Start --> AuthCheck
    AuthCheck -->|No| Login
    AuthCheck -->|Yes| Homepage
    Login --> Homepage
    
    Homepage --> Dashboard
    Homepage --> Medications
    Homepage --> Appointments
    Homepage --> Reminders
    Homepage --> Settings
    
    Dashboard --> ViewHealth
    ViewHealth --> TaskComplete
    
    Medications --> MedAction
    MedAction -->|Mark| MarkTaken
    MedAction -->|Add| AddMed
    MedAction -->|Check| CheckRefills
    MarkTaken --> TaskComplete
    AddMed --> TaskComplete
    CheckRefills --> TaskComplete
    
    Appointments --> ApptAction
    ApptAction -->|View| ViewDetails
    ApptAction -->|Schedule| ScheduleNew
    ApptAction -->|Directions| GetDirections
    ViewDetails --> TaskComplete
    ScheduleNew --> TaskComplete
    GetDirections --> TaskComplete
    
    Reminders --> MarkReminder
    MarkReminder --> TaskComplete
    
    Settings --> SettingsAction
    SettingsAction -->|Profile| EditProfile
    SettingsAction -->|Notifications| Notifications
    SettingsAction -->|Family| FamilySharing
    EditProfile --> TaskComplete
    Notifications --> TaskComplete
    FamilySharing --> TaskComplete
    
    TaskComplete --> NextAction
    NextAction -->|Continue| Continue
    NextAction -->|Home| ReturnHome
    NextAction -->|Exit| Logout
    
    Continue --> Homepage
    ReturnHome --> Homepage
    Logout --> Exit
```

## Key User Journeys

### 1. Medication Management
User Opens App → Login/Sign Up → Homepage → Medications → Choose Action (Mark as Taken / Add New / Check Refills) → Task Complete → Decision (Continue, Return Home, or Logout)

### 2. Appointment Workflow
User Opens App → Login/Sign Up → Homepage → Appointments → Choose Action (View Details / Schedule New / Get Directions) → Task Complete → Decision (Continue, Return Home, or Logout)

### 3. Daily Check-In
User Opens App → Login/Sign Up → Homepage → Dashboard / Reminders → View Health Data / Mark Reminder → Task Complete → Continue navigating or Return Home

**Note:** The flow is circular - users can navigate between features and return to the Homepage at any time. Settings are accessible from the Homepage navigation bar.
