const tag = "grid";
const label = {
    default: "2 columns",
    fr:"2 colonnes"
};
const defaultSchema = {
    width:12,
    columns: [
        {
            width: "1-2",
            elements:[]
        },
        {
            width: "1-2",
            elements:[]
        }
    ]
};
const isDataField = false;
export { tag, label, isDataField, defaultSchema };
