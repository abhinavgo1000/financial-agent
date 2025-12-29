import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface DialogProps {
    open: boolean;
    dialogTitle: string;
    dialogContent: React.ReactNode;
    acceptButtonText: string;
    onAccept: () => void;
    closeButtonText: string;
    onClose: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function DataDialog(props: DialogProps) {

    const { open, dialogTitle, dialogContent, acceptButtonText, onAccept, closeButtonText, onClose } = props;

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={onClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullScreen={fullScreen}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {dialogTitle}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    {dialogContent}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        {closeButtonText}
                    </Button>
                    <Button autoFocus onClick={onAccept}>
                        {acceptButtonText}
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}
