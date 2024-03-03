function predictgender() {
    const name = document.getElementById('name').value.trim();
    if (name.length > 0) {
        fetch(`https://api.genderize.io?name=${name}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('result').innerHTML = `The gender for "${name} " is ${data.gender}`;
                // document.getElementById('result').innerHTML = `The gender for "${name} " is ${data.gender} and the Probability is ${data.probability}`;
            })
    } else {
        document.getElementById('result').innerHTML = "Please Enter The Name";
    }
}