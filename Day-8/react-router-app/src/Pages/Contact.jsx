import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    let mounted = true;

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json()) // Fixed: Added parentheses to call json()
      .then((data) => {
        if (mounted) {
          console.log(data);
        }
      })
      .catch((error) => {
        if (mounted) {
          console.error(error);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return <div className="content">Contact</div>;
};

export default Contact;