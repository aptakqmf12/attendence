# 비즈니스 요구사항

## 로그인 페이지

- [x] 로그인 실패 경우, 실패 Response 내용을 안내해야 합니다. (👉 안내 방법은 자유)
- [x] 아이디 또는 비밀번호가 비어있을 경우 HelperText 형태로 에러 표시해야 합니다.

## 참석예정자 목록 조회 페이지

- [x] 목록은 선거의 고유 번호 내림차순으로 정렬해야 합니다.
- [x] 목록은 페이지당 최대 10명의 선거인 정보를 보여줘야 합니다.
- [x] 목록 상단 영역에서는 총 선거인 수를 표시해야 합니다.
- [x] Figma에 보여준 Format(전화번호, 생년월일)들을 준수해 주시기 바랍니다.
- [x] 페이지네이션은 자체적으로 구현해주시면 됩니다. (👉 전체 list를 반환하는 API 를 활용해서, 페이지네이션을 자체적으로 구현해주시면 됩니다)
- [x] 참석예정자 참석 등록 팝업(Dialog)
- [x] 팝업이 뜰 경우 기본 라디오 박스는 해당 참석 예정자의 등록된 참석 예정 유형입니다.
- [x] Figma에 보여준 Format(전화번호, 생년월일)들을 준수해 주시기 바랍니다.

# 스스로 결정한 사항

- `main.tsx`에 msw 래핑 추가
- 선거인 상세 조회(/attendees/:attendeeId')는 list의 값과 동일하여 api 호출은 불필요하다 생각되어 생략
