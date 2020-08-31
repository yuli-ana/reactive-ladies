import React, {useState} from 'react';
import Select from 'react-select';
import Swal from 'sweetalert2';
import parisImage from '../assets/undraw_Eiffel_tower_3gw8.png';

function SelectLanguage() {
    const options = [
        { value: 'English', label: 'English' },
        { value: 'French', label: 'French' }
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selected) => {
      setSelectedOption(selected);

      if (selected.value === 'French') {
        Swal.fire({
            title: 'Ooh la la!',
            imageUrl: parisImage,
            imageWidth: 200,
            imageHeight: 200,
            confirmButtonColor: '#192B4D',
            text: `Restez à l'écoute pour les mises à jour! La version française sera bientôt disponible.`,
            confirmButtonText: `D'accord!`
          })
      } else return;
    };
  
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: 'black',
            backgroundColor: state.isSelected ? '#E6FBF6' : 'white',
            padding: 8
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
    
            return { ...provided, opacity, transition };
        }
    };
  
    
    return (
        <>
        <Select
          styles={customStyles}  
          defaultValue={{ value: 'English', label: 'English' }}
          onChange={handleChange}
          options={options}
          autoFocus={true}
        />
      </>
    );
  }

  export default SelectLanguage;



