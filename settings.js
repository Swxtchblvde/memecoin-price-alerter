module.exports = {
  uiPort: process.env.PORT || 1880,
  credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "mysecretkey123",
  flowFile: "/data/flows.json",
  adminAuth: {
    type: "credentials",
    users: [{
      username: "admin",
      password: "admin", // Password: admin
      permissions: "*"
    }]
  },
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false
    }
  }
};
