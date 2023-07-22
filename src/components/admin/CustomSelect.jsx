import Select from "react-select";
import {useEffect, useState} from "react";

const CustomSelect = ({
	                      className,
	                      placeholder,
	                      field,
	                      form,
	                      options,
	                      initialValues = [],
	                      isMulti = false
                      }) => {

	const onChange = (option) => {
		form.setFieldValue(
			field.name,
			isMulti ? option.map((item) => item.value) : option.value
		);
	};

	const getValue = () => {
		if (options) {
			return isMulti
				? options.filter((option) => field.value.indexOf(option.value) >= 0)
				: options.find((option) => option.value === field.value);
		} else {
			return isMulti ? [] : "";
		}
	};

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			border: "none",
			width: "100%",
			borderBottom: "1px solid #ffffff",
			backgroundColor: "transparent",
			color: "#fff",
			padding: "4px",
			fontSize: "18px",
			boxShadow: state.isFocused ? "none" : provided.boxShadow,
			"& input": {
				color: "#ffffff"
			}
		}),
		option: (provided, state) => ({
			...provided,
			backgroundColor: "#333333",
			color: "#ffffff",
			borderRadius: "none",
			"&:hover": {
				backgroundColor: "#555555"
			}
		}),
		input: (provided) => ({
			...provided,
			color: "#c7c7c7"
		}),
		menu: (provided) => ({
			...provided,
			backgroundColor: "#333333",
		}),
		multiValue: (provided) => ({
			...provided,
			backgroundColor: "#333333"
		}),
		multiValueLabel: (provided) => ({
			...provided,
			padding: "0 10px",
			color: "#ffffff"
		}),
		multiValueRemove: (provided) => ({
			...provided,
			color: "#ffffff",
			cursor: "pointer",
			"&:hover": {
				backgroundColor: "#792020",
				color: "#ffffff"
			}
		})
	};

	useEffect(() => {
		if (initialValues.length > 0) {
			const selectedOptions = initialValues.map((curso) => {
				const option = options.find((opt) => opt.label === curso);
				return option ? option : null;
			});

			form.setFieldValue(
				field.name,
				isMulti
					? selectedOptions.filter((item) => item !== null).map((item) => item.value)
					: selectedOptions.length > 0 ? selectedOptions[0].value : ""
			);
		}
	}, []);

	return (
		<Select
			className={className}
			styles={customStyles}
			name={field.name}
			value={getValue()}
			onChange={onChange}
			placeholder={placeholder}
			options={options}
			isMulti={isMulti}
		/>
	);
};

export default CustomSelect;