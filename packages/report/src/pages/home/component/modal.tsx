import { useState } from 'react';
import Dialog from '@wooriga/common/src/components/Mui/dialog/Dialog';
import DialogContent from '@wooriga/common/src/components/Mui/dialog/DialogContent';
import DialogTitle from '@wooriga/common/src/components/Mui/dialog/DialogTitle';
import DialogActions from '@wooriga/common/src/components/Mui/dialog/DialogActions';
import RadioGroupField from '@wooriga/common/src/components/Mui/inputs/RadioGroupField';
import RadioWithLabel from '@wooriga/common/src/components/Mui/inputs/RadioWithLabel';
import { Button } from '@wooriga/common/src/components';
import { Typography, Box } from '@mui/material';
import { User } from '../../../types';
import { updateAttendee } from '../../../api/index';

export default function DialogModal({
  id,
  name,
  birth,
  phone,
  attendance,
  handleCloseModal,
}: User & { handleCloseModal: () => void }) {
  const [selectedAttendance, setSelectedAttendance] = useState<string>(
    attendance.code,
  );

  const handleUpdateAttendee = async () => {
    try {
      const res = await updateAttendee(id, selectedAttendance);
      alert(res.data.message);

      handleCloseModal();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Dialog open={true}>
      <DialogTitle>참석 예정 변경</DialogTitle>
      <DialogContent>
        <Typography>선거인 정보</Typography>
        <Box>
          <ul>
            <li>번호 : {id}</li>
            <li>이름 : {name}</li>
            <li>생년월일 : {birth}</li>
            <li>연락처 : {phone}</li>
          </ul>
        </Box>

        <Typography>참석 예정 유형</Typography>
        <div>{selectedAttendance}</div>
        <RadioGroupField
          radioGroupProps={{
            row: true,
          }}
          onChange={(e) => {
            setSelectedAttendance(e.target.value);
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
