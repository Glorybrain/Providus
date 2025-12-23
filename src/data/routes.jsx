import { Wallet } from "lucide-react";

/*
this page is just for the route names, incase it wants to be changed
*/
export const routes = {
  INDEX: "/",
  _404: "*",

  LINKS: {
    googlestore: "",
    appstore: "",
  },

  EXTERNAL: {
    facebook: "",
    titkok: "",
    youtube: "",
    linktree: "",
    twitter: "",
    instagram: "",
  },

  AUTH: {
    ADMIN: {
      login: {
        abs: "/auth/admin/login",
        rel: "login",
      },
      verifyOtp: {
        abs: "/auth/admin/verify-otp",
        rel: "verify-otp",
      },
    },

    CSO: {
      login: {
        abs: "/auth/cso/login",
        rel: "login",
      },
    },

    CRM: {
      login: {
        abs: "/auth/crm/login",
        rel: "login",
      },
    },

    BSM: {
      login: {
        abs: "/auth/bsm/login",
        rel: "login",
      },
    },
  },

  DASHBOARD: {
    ADMIN: {
      abs: "/admin",
      users: {
        abs: "/admin/users",
        rel: "users",
      },
      audit: {
        abs: "/admin/audit-log",
        rel: "audit-log",
      },
      role: {
        abs: "/admin/role-permission",
        rel: "role-permission",
      },
    },

    CSO: {
      abs: "/cso",
      index: {
        abs: "/cso",
      },
      request: {
        abs: "/cso/request-history",
        rel: "request-history",
      },
      createToken: {
        abs: "/cso/create-token-request",
        rel: "create-token-request",
      },
      manageToken: {
        abs: "/cso/manage-token",
        rel: "manage-token",
      },
    },

    CRM: {
      abs: "/crm",
      index: {
        abs: "/crm",
      },
    },

    BSM: {
      abs: "/bsm",
      index: {
        abs: "/bsm",
      },
    },

    error: {
      abs: "/dashboard/*",
      rel: "*",
    },
  },
};
