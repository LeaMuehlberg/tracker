type AddButtonProps = {
	onCLick: () => void;
};

export default function AddButton({ onClick }: AddButtonProps) {
	return (
		<button onClick={onClick}>
			+ Add Tracker
		</button>
	);
}