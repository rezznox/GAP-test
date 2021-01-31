import react from 'react';

function OptionSelection(props) {
    const { options, selection, select } = props;

    return (
        <div className="options">
            {
                options ?
                Object.keys(options).map((key, i)=> (
                    <button key={i}
                        className={options[key].name === selection.name ? 'selected': ''}
                        onClick={() => select(options[key])}
                    >
                        {options[key].name}
                    </button>
                )) : <> </>
            }
        </div>
    )
}

export default OptionSelection;