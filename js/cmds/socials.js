export default function(output, _hist, ...args) {
    let social = args[0];
    if (social) output.innerHTML += '<span data-color="orange">Opening ' + social + '...</span>';
    switch (social) {
        case 'github':
            window.open('https://github.com/Rabellion');
            break;
        case 'discord':
            window.open('discord://-/users/845391729549115402');
            break;
        case 'email':
            window.open('mailto:huzaifaimran583@gmail.com');
            break;
        default:
            output.innerHTML += `\
<span data-color="white">Github: <a href="https://github.com/Rabellion">@Rabellion</a></span>
<span data-color="MediumSlateBlue">Discord: <a href="discord://-/users/845391729549115402">rabellion</a></span>
<span data-color="yellow">Email: <a href="mailto:huzaifaimran583@gmail.com">huzaifaimran583@gmail.com</a></span>`;
        return;
    }
}
