import pytesseract

def ocr(language):

	try:
    		from PIL import Image
	except ImportError:
    		import Image


	#english language image to string
	if language=='eng':
		text=pytesseract.image_to_string(Image.open(filename))
		return text
		

	#any language image to string
	else:	
		text=pytesseract.image_to_string(Image.open(filename), lang=language)
		return text


language=raw_input("Enter langauage- eng/fra/ara..")
filename='test-french.jpg'
text=ocr(language)
print(text)

