function fetchData() {
	const URL = 'http://localhost:8888';

	fetch(URL)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			const users = data?.users;
			if (users.length != 0) {
				const userContainer = document.querySelector('.users');
				users
					.map(
						(item) => `
					<div class="user">
						<p class="user-name">User name: <span>${item.name}</span></p>
						<p class="user-age">User age: <span>${item.age}</span></p>
					</div>
				`
					)
					.forEach((el) => {
						userContainer.innerHTML += el;
					});
			}
		})
		.catch((err) => {
			document.querySelector('.users').textContent = err;
		});
}

fetchData();
