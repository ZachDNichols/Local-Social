# Local Social

For our project, we want to attempt to create a social media site. Preferably, our site will only show content that was uploaded in the same location as the user logging in from. The aim of this is to better connect communities and bring the social aspect back to social media.

Our team will consist of Ethan Henrickson, Tyler Busta, Zach Nichols, and Issac Polovick.

Our GitHub repository will be hosted at this url: https://github.com/ZachDNichols/Local-Social

For our backend, we would like to try to use Rust, with C++ being a fallback.

We would like to use Svelte for our frontend, with React being out fallback.

For QA testing, we are going to use Cyprus for our QA testing.

For our development, we are going to use the Agile method.


## Rust Dependencies
<pre>
[dependencies]
reqwest = { version = "0.11.14", features = ["json"] }
futures = "0.3.26"
tokio = { version = "1.25.0", features = ["full"] } # for our async runtime
rocket = "0.5.0-rc.2"
</pre>