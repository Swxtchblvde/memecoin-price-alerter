module.exports = {
  uiPort: process.env.PORT || 1880,
  credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "mysecretkey123",
  flowFile: "/data/flows.json",
  adminAuth: {
    type: "credentials",
    users: [{
      username: "admin",
      password: "$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DNm", // Password: admin
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
