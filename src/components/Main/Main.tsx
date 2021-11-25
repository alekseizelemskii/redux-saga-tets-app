import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Items } from '../../redux/reducers/itemsReducer';
import { useQueryParam, StringParam } from 'use-query-params';
import { RootState } from "../../redux/reducers";
import { Spinner } from '../Spinner/Spinner';
import Item from "../Item/Item";
import { getData } from "../../redux/action-creators";

export const Main: React.FC = () => {

    const [qsearchValue, setQSearchValue] = useQueryParam('searchValue', StringParam);
    const [qcategory, setCategory] = useQueryParam('category', StringParam);
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.itemsReducer.items);
    const category = useSelector((state: RootState) => state.itemsReducer.category);
    const loading = useSelector((state: RootState) => state.itemsReducer.loading);
    const [filteredData, setFilteredData] = useState<Items[]>([]);

    const schema = yup.object({
        searchValue: yup.string().min(3)
    });

    const formik = useFormik({
        initialValues: { searchValue: qsearchValue || '', category: qcategory || '' },
        validationSchema: schema,
        onSubmit: (values) => {
            const filterData: Items[] = items.filter(item => {
                return (values.searchValue.length ? item.name.toLowerCase().includes(values.searchValue.toLowerCase()) : true) && (values.category !== '' ? item.bsr_category === values.category : true)
            })
            setFilteredData(filterData);
            setCategory(values.category);
            setQSearchValue(values.searchValue);
        }
    });

    useEffect(() => {
        dispatch(getData());

    }, []);


    useEffect(() => {
        if (items && !qcategory && !qsearchValue) {
            setFilteredData(items);
        }
    }, [items]);

    useEffect(() => {
        if (items && qcategory) {
            setFilteredData(items.filter(item => item.bsr_category === qcategory));
        }
        else {
            setFilteredData(items.filter(item => item.name.toLowerCase().includes(qsearchValue || '')))
        }

    }, [qcategory, qsearchValue])

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>

                <Select
                    value={formik.values.category}
                    onChange={(e) => formik.setFieldValue('category', e.target.value)}>
                    {category?.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
                </Select>
                <Input
                    type='text'
                    color='primary'
                    placeholder='search..'
                    value={formik.values.searchValue}
                    onChange={(event) => formik.setFieldValue('searchValue', event.target.value)}
                />
                <Button

                    size='small' variant="contained"
                    type='submit' onClick={() => formik.handleSubmit()}>
                    Search
                </Button>
            </FormControl>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: "wrap",
                p: 1,
                m: 1,
            }} >
                {
                    (loading) ? <Spinner /> : <>
                        {
                            filteredData.map(item => <Item key={item.name} item={item} />)
                        }
                    </>
                }
            </Box>
        </>

    )
}