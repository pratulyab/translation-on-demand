from matplotlib import pyplot as plt
from wordcloud import WordCloud
from PIL import Image
from .preprocessing import *
from random import sample
from string import ascii_letters


def generate_wordcloud(text, lang='english', save=False, show=False):
	''' generate word cloud '''

	if lang == 'chinese':
		tokenized_text = chinese_tokenizer(text, remove_stopwords=True)
		text = ' '.join(tokenized_text)

		d = os.path.dirname(__file__) if "__file__" in locals() else os.getcwd()
		font_path = os.path.join(d, 'nlp/wc_cn/SourceHanSerifK-Light.otf')

		wc = WordCloud(font_path=font_path, background_color='white', height=860, width=1000, margin=2, max_font_size=100)
		wc.generate(text)

	else:
		tokenized_text = default_tokenizer(text, lang=lang)
		text = ' '.join([' '.join(sent) for sent in tokenized_text])
		wc = WordCloud().generate(text)

	if show:
		plt.figure()
		plt.imshow(wc, interpolation='bilinear')
		plt.axis('off')
		plt.show()

	if save:
		filename = "wc_{}.jpg".format(''.join(sample(ascii_letters, 10)))
		d = os.path.dirname(__file__) if "__file__" in locals() else os.getcwd()
		filepath = os.path.join(d, filename)
		wc.to_file(filepath)
		return filepath

	return wc
