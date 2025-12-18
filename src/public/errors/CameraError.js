class CameraError extends Error {
	constructor(message) {
		super(message);
		this.name = 'CameraError';
	}
}