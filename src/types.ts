export type Callback = (response: ImagePickerResponse) => any;

export interface ImageLibraryOptions {
  mediaType: MediaType;
  maxWidth?: number;
  maxHeight?: number;
  quality?: PhotoQuality;
  videoQuality?: AndroidVideoOptions | iOSVideoOptions;
  includeBase64?: boolean;
}

export interface CameraOptions extends ImageLibraryOptions {
  durationLimit?: number;
  saveToPhotos?: boolean;
}

export interface ImagePickerResponse {
  didCancel?: boolean;
  errorCode?: ErrorCode;
  errorMessage?: string;
  base64?: string;
  uri?: string;
  width?: number;
  height?: number;
  fileSize?: number;
  type?: string; //TODO
  fileName?: string;
  //IOS ONLY original image is the image reduced to 2038x2048
  originalFileName?: string;
  originalImagePath?: string;
}

export type PhotoQuality =
  | 0
  | 0.1
  | 0.2
  | 0.3
  | 0.4
  | 0.5
  | 0.6
  | 0.7
  | 0.8
  | 0.9
  | 1;
export type MediaType = 'photo' | 'video';
export type AndroidVideoOptions = 'low' | 'high';
export type iOSVideoOptions = 'low' | 'medium' | 'high';
export type ErrorCode = 'camera_unavailable' | 'permission' | 'other';
