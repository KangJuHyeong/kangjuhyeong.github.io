from pathlib import Path
import unittest

from pypdf import PdfReader


RESUME = Path(__file__).resolve().parents[1] / "assets" / "resume.pdf"


class ResumeContentTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.text = PdfReader(RESUME).pages[0].extract_text()

    def test_data_stack_shows_the_simplified_stack(self):
        self.assertIn("MySQL | Redis | Flyway", self.text)

    def test_qualification_and_language_dates_have_acquisition_labels(self):
        for entry in (
            "SQLD (SQL 개발자) | 2026.06 취득",
            "ADsP (데이터분석 준전문가) | 2026.06 취득",
            "정보처리기사 | 2026.09 취득",
            "OPIc IH | 2025.10 취득",
        ):
            self.assertIn(entry, self.text)


if __name__ == "__main__":
    unittest.main()
