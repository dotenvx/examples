// src/main.rs
#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> String {
    let hello = std::env::var("HELLO").unwrap_or("".to_string());
    format!("Hello {}", hello)
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}
