import { useState } from 'react';
import Dialog from '@wooriga/common/src/components/Mui/dialog/Dialog';
import DialogContent from '@wooriga/common/src/components/Mui/dialog/DialogContent';
import DialogTitle from '@wooriga/common/src/components/Mui/dialog/DialogTitle';

import RadioGroupField from '@wooriga/common/src/components/Mui/inputs/RadioGroupField';
import RadioWithLabel from '@wooriga/common/src/components/Mui/inputs/RadioWithLabel';
import { Button } from '@wooriga/common/src/components';
import { Typography, Box } from '@mui/material';
import { User } from '../../../types';
import { updateAttendee } from '../../../api/index';

import { styled } from 'styled-components';

export default function DialogModal({
  id,
  name,
  birth,
  phone,
  attendance,
  handleCloseModal,
  refetchFn,
}: User & { handleCloseModal: () => void; refetchFn: () => void }) {
  const [selectedAttendance, setSelectedAttendance] = useState<string>(
    attendance.code,
  );

  const handleUpdateAttendee = async () => {
    try {
      const res = await updateAttendee(id, selectedAttendance);
      alert(res.data.message);

      refetchFn();
      handleCloseModal();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Dialog open={true}>
      <DialogTitle fontSize={24} fontWeight={700}>
        참석 예정 변경
      </DialogTitle>

      <DialogContent>
        <Typography fontSize={18}>선거인 정보</Typography>

        <Box>
          <StyledUl>
            {[
              { label: '번호', info: id },
              { label: '이름', info: name },
              { label: '생년월일', info: birth },
              { label: '연락처', info: phone },
            ].map((obj, i) => (
              <li key={obj.label + i}>
                <div className="attendee_label">{obj.label}</div>
                <div className="attendee_info">{obj.info}</div>
              </li>
            ))}
          </StyledUl>
        </Box>

        <Typography>참석 예정 유형</Typography>

        <RadioGroupField
          radioGroupProps={{
            row: true,
          }}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setSelectedAttendance(target.value);
          }}
        >
          <RadioWithLabel
            value="MYSELF"
            label="본인"
            checked={selectedAttendance === 'MYSELF'}
          />
          <RadioWithLabel
            value="AGENT"
            label="대리인"
            checked={selectedAttendance === 'AGENT'}
          />
          <RadioWithLabel
            value="UNDETERMINED"
            label="미정"
            checked={selectedAttendance === 'UNDETERMINED'}
          />
          <RadioWithLabel
            value="ABSENCE"
            label="불참"
            checked={selectedAttendance === 'ABSENCE'}
          />
        </RadioGroupField>
      </DialogContent>

      <Box display={'flex'} gap={1}>
        <Button variant="outlined" fullWidth onClick={handleCloseModal}>
          취소
        </Button>
        <Button fullWidth onClick={handleUpdateAttendee}>
          확인
        </Button>
      </Box>
    </Dialog>
  );
}

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 2px #eee solid;
  border-radius: 10px;
  padding: 24px;
  gap: 16px;
  list-style: none;

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .attendee_label {
      width: 62px;
      color: #7e7e7e;
    }
    .attendee_info {
      color: #515151;
    }
  }
`;
