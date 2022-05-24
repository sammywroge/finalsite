function toggleNav() {
    let elements = document.getElementsByClassName('toggle-nav');
    for(let i = 0; i < elements.length; i++){
    elements[i].classList.toggle('show');
    }
}
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.toggle-client-form').addEventListener('click', function(){
		document.querySelector('.clients-form').classList.add('appear');
        document.querySelector('.clients-form').classList.remove('disappear');
		document.querySelector('.partnership-form').classList.add('disappear');
        document.querySelector('.partnership-form').classList.remove('appear');
	});
    document.querySelector('.toggle-partnership-form').addEventListener('click', function(){
		document.querySelector('.clients-form').classList.add('disappear');
        document.querySelector('.clients-form').classList.remove('appear');
		document.querySelector('.partnership-form').classList.add('appear');
        document.querySelector('.partnership-form').classList.remove('disappear');
	});
});
