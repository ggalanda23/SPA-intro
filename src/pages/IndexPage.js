import React, { useState} from 'react'
import { PageContainer } from '../components/common/PageContainer'
import { Button, LinkButton } from '../components/common/Button';
import { H1 } from '../components/common/Typography';
import { Link } from 'react-router-dom';
const IndexPage = () => {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  }
  
    return (
  <PageContainer isDarkMode={isDarkMode}>
    <Button onClick={handleToggleDarkMode}> Toggle dark mode </Button>
    <H1>
        Welcome to my Rick and Morty API
    </H1>
    <LinkButton to="/all"> All Characters </LinkButton>
  </PageContainer>
    );
  }

export default IndexPage;