//// ===== Config =====
//const USE_BACKEND = false; // set true when your Spring Boot API is ready
//const API_BASE = "http://localhost:8080/api";
//
//// ===== Utilities =====
//const byId = (id) => document.getElementById(id);
//const stripTags = (s) => (s || "").replace(/</g, "&lt;").replace(/>/g, "&gt;"); // simple XSS guard
//const todayISO = () => new Date().toISOString().slice(0,10);
//
//// ===== Admin nav toggle (demo) =====
//(function initRoleNav(){
//  const role = localStorage.getItem("role"); // "admin" | "customer" | null
//  if (role === "admin") {
//    document.querySelectorAll(".admin-only").forEach(el => el.style.display = "block");
//  }
//})();

// ===== Booking Form =====
//(function initBooking(){
//  const form = byId("bookingForm");
//  if (!form) return;
//
//  byId("bdate").setAttribute("min", todayISO()); // prevent past dates
//
//  form.addEventListener("submit", async (e) => {
//    e.preventDefault();
//
//    const payload = {
//      name: form.querySelector("#bname").value.trim(),
//      email: form.querySelector("#bemail").value.trim(),
//      date: form.querySelector("#bdate").value,
//      pkg: form.querySelector("#bpackage").value,
//      message: form.querySelector("#bmessage").value.trim()
//    };
//
//    // basic validation
//    if (!payload.name || !payload.email || !payload.date || !payload.pkg) {
//      alert("Please fill all required fields.");
//      return;
//    }
//
//    if (USE_BACKEND) {
//      try {
//        const res = await fetch(`${API_BASE}/bookings`, {
//          method: "POST",
//          headers: { "Content-Type": "application/json" },
//          body: JSON.stringify(payload)
//        });
//        if (!res.ok) throw new Error("Network error");
//        alert("Booking submitted! We’ll confirm by email.");
//        form.reset();
//      } catch (err) {
//        alert("Could not submit booking. Please try again.");
//      }
//    } else {
//      // local demo storage
//      const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
//      bookings.push({ ...payload, id: Date.now() });
//      localStorage.setItem("bookings", JSON.stringify(bookings));
//      alert("Booking submitted! (Demo mode)");
//      form.reset();
//    }
//  });
//})();
//
//
//
//
//// ===== Reviews =====
//(function initReviews(){
//  const list = byId("reviewsList");
//  const form = byId("reviewForm");
//  if (!list || !form) return;
//
//  function render(reviews) {
//    list.innerHTML = "";
//    reviews.forEach(r => {
//      const card = document.createElement("div");
//      card.className = "review-card";
//      card.innerHTML = `
//        <div class="name">${stripTags(r.name)}</div>
//        <div class="meta">Rating: ${Number(r.rating)}/5</div>
//        <div class="text">${stripTags(r.text)}</div>
//      `;
//      list.appendChild(card);
//    });
//  }
//
//  async function loadReviews() {
//    if (USE_BACKEND) {
//      try {
//        const res = await fetch(`${API_BASE}/reviews`);
//        const data = await res.json();
//        render(data);
//      } catch {
//        render([]);
//      }
//    } else {
//      const demo = JSON.parse(localStorage.getItem("reviews") || "[]");
//      render(demo);
//    }
//  }
//
//  form.addEventListener("submit", async (e) => {
//    e.preventDefault();
//    const name = byId("rname").value.trim();
//    const rating = byId("rrating").value;
//    const text = byId("rmessage").value.trim();
//    if (!name || !rating || !text) return;
//
//    const payload = { name, rating, text };
//
//    if (USE_BACKEND) {
//      try {
//        const res = await fetch(`${API_BASE}/reviews`, {
//          method: "POST",
//          headers: { "Content-Type": "application/json" },
//          body: JSON.stringify(payload)
//        });
//        if (!res.ok) throw new Error();
//        await loadReviews();
//        form.reset();
//      } catch {
//        alert("Could not submit review. Please try again.");
//      }
//    } else {
//      const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
//      reviews.unshift({ ...payload, id: Date.now() }); // newest first
//      localStorage.setItem("reviews", JSON.stringify(reviews));
//      loadReviews();
//      form.reset();
//    }
//  });
//
//  loadReviews();
//})();



//// ===== Config =====
//const USE_BACKEND = false; // set true when your Spring Boot API is ready
//const API_BASE = "http://localhost:8080/api";
//
//// ===== Utilities =====
//const byId = (id) => document.getElementById(id);
//const stripTags = (s) => (s || "").replace(/</g, "&lt;").replace(/>/g, "&gt;"); // simple XSS guard
//const todayISO = () => new Date().toISOString().slice(0,10);
//
//// ===== Admin nav toggle (demo) =====
//(function initRoleNav(){
//  const role = localStorage.getItem("role"); // "admin" | "customer" | null
//  if (role === "admin") {
//    document.querySelectorAll(".admin-only").forEach(el => el.style.display = "block");
//  }
//})();
//
//
//
//
//// =================== SIGNUP FORM ===================
//const signupForm = document.getElementById("signupForm");
//if (signupForm) {
//    signupForm.addEventListener("submit", async (e) => {
//        e.preventDefault();
//
//        const password = document.getElementById("password").value;
//        const confirm = document.getElementById("confirm").value;
//
//        if (password !== confirm) {
//            alert("Passwords do not match!");
//            return;
//        }
//
//        const data = {
//            name: document.getElementById("name").value,
//            email: document.getElementById("email").value,
//            password: password
//        };
//
//        try {
//            const res = await fetch("http://localhost:8080/api/auth/signup", {   // ✅ FIXED
//                method: "POST",
//                headers: { "Content-Type": "application/json" },
//                body: JSON.stringify(data)
//            });
//
//            if (res.ok) {
//                alert("Signup successful!");
//                window.location.href = "login.html";
//            } else {
//                const errText = await res.text();
//                alert(errText || "Signup failed");
//            }
//        } catch (err) {
//            console.error(err);
//            alert("Error connecting to server");
//        }
//    });
//}
//
//// =================== LOGIN FORM ===================
//const loginForm = document.getElementById("loginForm");
//if (loginForm) {
//    loginForm.addEventListener("submit", async (e) => {
//        e.preventDefault();
//
//        const data = {
//            email: document.getElementById("email").value,
//            password: document.getElementById("password").value
//        };
//
//        try {
//            const res = await fetch("http://localhost:8080/api/auth/login", {   // ✅ FIXED
//                method: "POST",
//                headers: { "Content-Type": "application/json" },
//                body: JSON.stringify(data)
//            });
//
//            if (res.ok) {
//                const user = await res.json();
//                alert("Login successful!");
//                localStorage.setItem("user", JSON.stringify(user));
//                window.location.href = "index.html";
//            } else {
//                const errText = await res.text();
//                alert(errText || "Login failed");
//            }
//        } catch (err) {
//            console.error(err);
//            alert("Error connecting to server");
//        }
//    });
//}
//
//
//// =================== BOOKING FORM ===================
//const bookingForm = document.getElementById("bookingForm");
//if (bookingForm) {
//    bookingForm.addEventListener("submit", async (e) => {
//        e.preventDefault();
//
//        const data = {
//            name: document.getElementById("bname").value,
//            email: document.getElementById("bemail").value,
//            phone: document.getElementById("bphone").value,
//            date: document.getElementById("bdate").value,
//            packageType: document.getElementById("bpackage").value,
//            message: document.getElementById("bmessage").value
//        };
//
//        try {
//            const res = await fetch(`${API_BASE}/api/booking`, {
//                method: "POST",
//                headers: { "Content-Type": "application/json" },
//                body: JSON.stringify(data)
//            });
//
//            if (res.ok) {
//                alert("Booking successful!");
//                bookingForm.reset();
//            } else {
//                const err = await res.text();
//                alert(err || "Booking failed");
//            }
//        } catch (err) {
//            console.error(err);
//            alert("Error connecting to server");
//        }
//    });
//}
//
//// =================== REVIEW FORM ===================
//const reviewForm = document.getElementById("reviewForm");
//if (reviewForm) {
//    reviewForm.addEventListener("submit", async (e) => {
//        e.preventDefault();
//
//        const data = {
//            name: document.getElementById("rname").value,
//            rating: document.getElementById("rrating").value,
//            message: document.getElementById("rmessage").value
//        };
//
//        try {
//            const res = await fetch(`${API_BASE}/api/review`, {
//                method: "POST",
//                headers: { "Content-Type": "application/json" },
//                body: JSON.stringify(data)
//            });
//
//            if (res.ok) {
//                alert("Review submitted!");
//                reviewForm.reset();
//            } else {
//                const err = await res.text();
//                alert(err || "Review submission failed");
//            }
//        } catch (err) {
//            console.error(err);
//            alert("Error connecting to server");
//        }
//    });
//}


//// ===== Config =====
//const USE_BACKEND = true; // set false if you want frontend only
//const API_BASE = "http://localhost:8080"; // corrected: no extra /api
//
//// ===== Utilities =====
//const byId = (id) => document.getElementById(id);
//const stripTags = (s) => (s || "").replace(/</g, "&lt;").replace(/>/g, "&gt;"); // simple XSS guard
//const todayISO = () => new Date().toISOString().slice(0,10);
//
//// ===== Admin nav toggle (demo) =====
//(function initRoleNav(){
//  const role = localStorage.getItem("role"); // "admin" | "customer" | null
//  if (role === "admin") {
//    document.querySelectorAll(".admin-only").forEach(el => el.style.display = "block");
//  }
//})();
//
//// =================== SIGNUP FORM ===================
//const signupForm = byId("signupForm");
//if (signupForm) {
//    signupForm.addEventListener("submit", async (e) => {
//        e.preventDefault();
//
//        const password = byId("password").value;
//        const confirm = byId("confirm").value;
//
//        if (password !== confirm) {
//            alert("Passwords do not match!");
//            return;
//        }
//
//        const data = {
//            name: byId("name").value,
//            email: byId("email").value,
//            password: password
//        };
//
//        try {
//            const res = await fetch(`${API_BASE}/api/auth/signup`, {
//                method: "POST",
//                headers: { "Content-Type": "application/json" },
//                body: JSON.stringify(data)
//            });
//
//            if (res.ok) {
//                alert("Signup successful!");
//                window.location.href = "login.html";
//            } else {
//                const errText = await res.text();
//                alert(errText || "Signup failed");
//            }
//        } catch (err) {
//            console.error(err);
//            alert("Error connecting to server");
//        }
//    });
//}
//
//// =================== LOGIN FORM ===================
//const loginForm = byId("loginForm");
//if (loginForm) {
//    loginForm.addEventListener("submit", async (e) => {
//        e.preventDefault();
//
//        const data = {
//            email: byId("email").value,
//            password: byId("password").value
//        };
//
//        try {
//            const res = await fetch(`${API_BASE}/api/auth/login`, {
//                method: "POST",
//                headers: { "Content-Type": "application/json" },
//                body: JSON.stringify(data)
//            });
//
//            if (res.ok) {
//                const user = await res.json();
//                alert("Login successful!");
//                localStorage.setItem("user", JSON.stringify(user));
//                window.location.href = "index.html";
//            } else {
//                const errText = await res.text();
//                alert(errText || "Login failed");
//            }
//        } catch (err) {
//            console.error(err);
//            alert("Error connecting to server");
//        }
//    });
//}
//
//// =================== BOOKING FORM ===================
//const bookingForm = byId("bookingForm");
//if (bookingForm) {
//    bookingForm.addEventListener("submit", async (e) => {
//        e.preventDefault();
//
//        const data = {
//            name: byId("bname").value,
//            email: byId("bemail").value,
//            phone: byId("bphone").value,
//            date: byId("bdate").value,
//            packageType: byId("bpackage").value,
//            message: byId("bmessage").value
//        };
//
//        try {
//            const res = await fetch(`${API_BASE}/api/booking`, {
//                method: "POST",
//                headers: { "Content-Type": "application/json" },
//                body: JSON.stringify(data)
//            });
//
//            if (res.ok) {
//                alert("Booking successful!");
//                bookingForm.reset();
//            } else {
//                const err = await res.text();
//                alert(err || "Booking failed");
//            }
//        } catch (err) {
//            console.error(err);
//            alert("Error connecting to server");
//        }
//    });
//}
//
//// =================== REVIEW FORM ===================
//const reviewForm = byId("reviewForm");
//if (reviewForm) {
//    reviewForm.addEventListener("submit", async (e) => {
//        e.preventDefault();
//
//        const data = {
//            name: byId("rname").value,
//            rating: byId("rrating").value,
//            message: byId("rmessage").value
//        };
//
//        try {
//            const res = await fetch(`${API_BASE}/api/review`, {
//                method: "POST",
//                headers: { "Content-Type": "application/json" },
//                body: JSON.stringify(data)
//            });
//
//            if (res.ok) {
//                alert("Review submitted!");
//                reviewForm.reset();
//            } else {
//                const err = await res.text();
//                alert(err || "Review submission failed");
//            }
//        } catch (err) {
//            console.error(err);
//            alert("Error connecting to server");
//        }
//    });
//}
//


// ===== Config =====
const USE_BACKEND = true; // set false if you want frontend-only testing
const API_BASE = "http://localhost:8080"; // backend URL, no extra /api

// ===== Utilities =====
const byId = (id) => document.getElementById(id);
const stripTags = (s) => (s || "").replace(/</g, "&lt;").replace(/>/g, "&gt;"); // simple XSS guard
const todayISO = () => new Date().toISOString().slice(0, 10);

// ===== Admin nav toggle =====
(function initRoleNav() {
    const userStr = localStorage.getItem("user");
    if (userStr) {
        const user = JSON.parse(userStr);
        const role = user.role; // expecting {role: "admin"} from backend
        if (role === "admin") {
            document.querySelectorAll(".admin-only").forEach(el => el.style.display = "block");
        }
    }
})();

// ===== Helper fetch function =====
async function postData(url, data) {
    if (!USE_BACKEND) {
        console.log("Frontend-only mode, would send:", data);
        return { ok: true, json: async () => data, text: async () => "" };
    }
    return fetch(`${API_BASE}${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

// =================== SIGNUP FORM ===================
const signupForm = byId("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const password = byId("password").value;
        const confirm = byId("confirm").value;

        if (password !== confirm) {
            alert("Passwords do not match!");
            return;
        }

        const data = {
            name: stripTags(byId("name").value),
            email: stripTags(byId("email").value),
            password: password
        };

        try {
            const res = await postData("/api/auth/signup", data);

            if (res.ok) {
                alert("Signup successful!");
                window.location.href = "login.html";
            } else {
                const errText = await res.text();
                alert(errText || "Signup failed");
            }
        } catch (err) {
            console.error(err);
            alert("Error connecting to server");
        }
    });
}

// =================== LOGIN FORM ===================
const loginForm = byId("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            email: stripTags(byId("email").value),
            password: byId("password").value
        };

        try {
            const res = await postData("/api/auth/login", data);

            if (res.ok) {
                const user = await res.json();
                alert("Login successful!");
                localStorage.setItem("user", JSON.stringify(user));
                window.location.href = "index.html";
            } else {
                const errText = await res.text();
                alert(errText || "Login failed");
            }
        } catch (err) {
            console.error(err);
            alert("Error connecting to server");
        }
    });
}

// =================== BOOKING FORM ===================
const bookingForm = byId("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: stripTags(byId("bname").value),
            email: stripTags(byId("bemail").value),
            phone: stripTags(byId("bphone").value),
            date: byId("bdate").value,
            packageType: stripTags(byId("bpackage").value),
            message: stripTags(byId("bmessage").value)
        };

        try {
            const res = await postData("/api/booking/create", data);

            if (res.ok) {
                alert("Booking successful!");
                bookingForm.reset();
            } else {
                const err = await res.text();
                alert(err || "Booking failed");
            }
        } catch (err) {
            console.error(err);
            alert("Error connecting to server");
        }
    });
}

// =================== REVIEW FORM ===================
const reviewForm = byId("reviewForm");
if (reviewForm) {
    reviewForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: stripTags(byId("rname").value),
            rating: byId("rrating").value,
            message: stripTags(byId("rmessage").value)
        };

        try {
             const res = await postData("/api/review/create", data);


            if (res.ok) {
                alert("Review submitted!");
                reviewForm.reset();
            } else {
                const err = await res.text();
                alert(err || "Review submission failed");
            }
        } catch (err) {
            console.error(err);
            alert("Error connecting to server");
        }
    });
}


// =================== BOOKING FORM ===================
//const bookingForm = byId("bookingForm");
//if (bookingForm) {
//    bookingForm.addEventListener("submit", async (e) => {
//        e.preventDefault();
//
//        const data = {
//            name: stripTags(byId("bname").value),
//            email: stripTags(byId("bemail").value),
//            phone: stripTags(byId("bphone").value),
//            date: byId("bdate").value,
//            packageType: stripTags(byId("bpackage").value),
//            message: stripTags(byId("bmessage").value)
//        };
//
//        try {
//            const res = await postData("/api/booking", data);
//
//            if (res.ok) {
//                alert("Booking successful!");
//                bookingForm.reset();
//            } else {
//                const err = await res.text();
//                alert(err || "Booking failed");
//            }
//        } catch (err) {
//            console.error(err);
//            alert("Error connecting to server");
//        }
//    });
//}
//
//// =================== REVIEW FORM ===================
//const reviewForm = byId("reviewForm");
//if (reviewForm) {
//    reviewForm.addEventListener("submit", async (e) => {
//        e.preventDefault();
//
//        const data = {
//            name: stripTags(byId("rname").value),
//            rating: byId("rrating").value,
//            message: stripTags(byId("rmessage").value)
//        };
//
//        try {
//            const res = await postData("/api/review", data);
//
//            if (res.ok) {
//                alert("Review submitted!");
//                reviewForm.reset();
//            } else {
//                const err = await res.text();
//                alert(err || "Review submission failed");
//            }
//        } catch (err) {
//            console.error(err);
//            alert("Error connecting to server");
//        }
//    });
//}





















































//old code

//const byId = id => document.getElementById(id);
//const stripTags = s => (s||"").replace(/</g,"&lt;").replace(/>/g,"&gt;");
//
//// helper
//async function postData(url="", data={}) {
//    return fetch(`${API_BASE}${url}`, {
//        method: "POST",
//        headers: { "Content-Type": "application/json" },
//        body: JSON.stringify(data)
//    });
//}
//
//// Booking Form
//const bookingForm = byId("bookingForm");
//if (bookingForm) {
//    bookingForm.addEventListener("submit", async e => {
//        e.preventDefault();
//        const data = {
//            name: stripTags(byId("bname").value),
//            email: stripTags(byId("bemail").value),
//            phone: stripTags(byId("bphone").value),
//            date: byId("bdate").value,
//            packageType: stripTags(byId("bpackage").value),
//            message: stripTags(byId("bmessage").value)
//        };
//        try {
//            const res = await postData("/api/booking", data);
//            if (res.ok) { alert("Booking successful!"); bookingForm.reset(); }
//            else { const err = await res.text(); alert(err || "Booking failed"); }
//        } catch(err) { console.error(err); alert("Error connecting to server"); }
//    });
//}
//
//// Review Form
//const reviewForm = byId("reviewForm");
//if (reviewForm) {
//    reviewForm.addEventListener("submit", async e => {
//        e.preventDefault();
//        const data = {
//            name: stripTags(byId("rname").value),
//            rating: byId("rrating").value,
//            message: stripTags(byId("rmessage").value)
//        };
//        try {
//            const res = await postData("/api/review", data);
//            if (res.ok) { alert("Review submitted!"); reviewForm.reset(); }
//            else { const err = await res.text(); alert(err || "Review submission failed"); }
//        } catch(err) { console.error(err); alert("Error connecting to server"); }
//    });
//}
//
