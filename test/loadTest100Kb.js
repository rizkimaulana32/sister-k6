import http from "k6/http";
import { check } from "k6";

export let options = {
  stages: [
    { duration: "10s", target: 100 },
    { duration: "30s", target: 100 },
    { duration: "10s", target: 200 },
    { duration: "30s", target: 200 },
    { duration: "10s", target: 500 }, 
    { duration: "30s", target: 500 }, 
    { duration: "10s", target: 1000 },
    { duration: "30s", target: 1000 },
    { duration: "10s", target: 2000 },
    { duration: "30s", target: 2000 },
    { duration: "10s", target: 5000 },
    { duration: "30s", target: 5000 },
    { duration: "10s", target: 10000 },
    { duration: "30s", target: 10000 },
  ],
};

export default function () {
  const res100 = http.get("http://localhost:3000/load100KB");

  check(res100, {
    "100KB status 200": (r) => r.status === 200,
  });
}
