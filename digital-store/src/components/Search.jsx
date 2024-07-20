import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';

const Search = () => {
    return (
        <form className='flex flex-1 justify-content-center'>
        <IconField className="w-full right-1 top-1/2 -translate-y-1/2 p-2"
            iconPosition="right">
            <InputIcon className="pi pi-search text-darkGray2 bg-lightGray3 md:flex-1"> </InputIcon>
            <InputText className="w-full h-4rem surface-50 border-none " v-model="value1" placeholder="Pesquisar Produto..." />
        </IconField>
        </form>
    );
}

export default Search;