import './header.css';

function Header({
    path = 'Home/ ',
    name = 'title'
}) {
    const segments = path.split('/');

    const renderPathSegments = (segments) => (
        segments.map((segment, index) => (
            <span
                key={index}
                className={`path-segment ${index % 2 === 0 ? 'green' : 'black'}`}
            >
                {segment}
                {index < segments.length - 1 && '/'}
            </span>
        ))
    );

    return (
        <div className='mostappheader-container'>
            <div className='mostappheader-header'>
                <h3 className='mostappheader-path'>
                    {renderPathSegments(segments)}
                </h3>
            </div>
            <div className='mostappheader-core'>
                <h1 className='mostappheader-name'> {name} </h1>
                <p className='mostappheader-pathcore'>
                    {renderPathSegments(segments)}
                </p>
            </div>
        </div>
    );
}

export default Header;
