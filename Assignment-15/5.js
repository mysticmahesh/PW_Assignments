let typeOfPackage ="standard"
switch (typeOfPackage) {
    case 'standard':
        console.log('your package will delivered in 3-5 days');
        break;
    case 'express':
        console.log('your package will delivered in 1-2 days');
        break;
    case 'overnight':
        console.log('your package will delivered in next day');
        break;
    default:
        console.log("invalid package type!");
        break;
}