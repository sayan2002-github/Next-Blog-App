"use client"
import { useEffect } from "react";

const BootstrapConfig = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  });

  return null;
};

export default BootstrapConfig;
