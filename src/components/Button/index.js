import Button from "@mui/material/Button";

export default function PrimaryButton(props) {
  const { label, type, onClick } = props;
  return (
    <Button
      type={type}
      variant="contained"
      size="large"
      disableElevation
      onClick={onClick}
      sx={{ textTransform: "capitalize" }}
    >
      {label}
    </Button>
  );
}
