const DOMAIN_API = process.env.REACT_APP_API;

export const AxiosClientConfig = {
    DOMAIN_API: DOMAIN_API,
    AUTH_TYPES: "Bearer",
    CONTENT_TYPE: "application/json; charset=utf-8",
};

export const API = {
    Configuration: "Configuration",
    Department: "Department",
    SPAPost: "SPAPost",
    Gallery: "Gallery",
    LinkBuilding: "LinkBuilding",
    QA: "QA",
    User: "User",
    Partner: "Partner",
    DepartmentService: "DepartmentService",
    Medinet: "Medinet",
    Schedule: "Schedule",
    Category: "Category",
    GalleryStore: "GalleryStore",
    Advertise: "Advertise",
    Appointment: "Appointment",
    Feature: "Feature",
    Slider: "Slider",
    DoctorProfile: "DoctorProfile",
};
